$WORK_DIR = $PSScriptRoot
$WEBRTC_DIR="$WORK_DIR/libcs/dep/_google-webrtc"
$MSQUIC_DIR="$WORK_DIR/libcs/dep/_msquic"
$WEBRTC_OUT_DIR="$WEBRTC_DIR/src/out/release/obj"
$MSQUIC_OUT_DIR="$MSQUIC_DIR/build/windows/x64_schannel/obj/Release"

$env:CC="clang"
$env:CXX="clang++"
$env:CXXFLAGS="-I$WEBRTC_DIR/src -I$WEBRTC_DIR/src/third_party/abseil-cpp -I$MSQUIC_DIR/src/inc -std=c++17 -DWEBRTC_WIN -DQUIC_API_ENABLE_PREVIEW_FEATURES -DNOMINMAX"
$env:CGO_LDFLAGS="-L$MSQUIC_DIR/build/windows/x64_schannel/obj/Release -L$WEBRTC_DIR/src/out/release/obj -lmsquic.lib -lwebrtc.lib"
$env:CARGO_CFG_TARGET_OS="windows"
$env:RUSTFLAGS="-L $MSQUIC_OUT_DIR -l msquic -L $WEBRTC_OUT_DIR -l webrtc"

$env:DEPOT_TOOLS_WIN_TOOLCHAIN="0"
$env:GYP_GENERATORS="msvs-ninja,ninja"
$env:GYP_MSVS_OVERRIDE_PATH="C:\Program Files\Microsoft Visual Studio\2022\Community"
$env:GYP_MSVS_VERSION="2022"

# 检查 Pscx 模块是否已安装
if (-not (Get-Module -Name Pscx -ListAvailable)) {
    Write-Host "安装Pscx PowerShell插件"
    Install-Module -Name Pscx -AllowPrerelease -Force
}

# 检查 VSSetup 模块是否已安装
if (-not (Get-Module -Name VSSetup -ListAvailable)) {
    Write-Host "安装VSSetup PowerShell插件"
    Install-Module -Name VSSetup -AllowPrerelease -Force
}
Import-VisualStudioVars 2022 amd64

Set-Location $WORK_DIR
function complie_webrtc{
    Set-Location "$WEBRTC_DIR/src"
    Write-Host "开始编译webrtc"
    gn gen out/release --args="clang_use_chrome_plugins=false is_clang=true enable_libaom=false is_component_build=false is_debug=false libyuv_disable_jpeg=true libyuv_include_tests=false rtc_build_examples=false rtc_build_tools=false rtc_enable_grpc=false rtc_enable_protobuf=false rtc_include_builtin_audio_codecs=false rtc_include_dav1d_in_internal_decoder_factory=false rtc_include_ilbc=false rtc_include_internal_audio_device=false rtc_include_tests=false rtc_use_h264=false rtc_use_x11=false treat_warnings_as_errors=false use_custom_libcxx=false use_gold=false use_lld=true use_rtti=true use_sysroot=false"
    ninja -C out/release
    if (Test-Path -Path "$WEBRTC_OUT_DIR/webrtc.lib")
    {
        Write-Host "webrtc编译完成"
    }
    else
    {
        Write-Host "webrtc编译失败"
        Set-Location $WORK_DIR
        exit
    }
}

function complie_msquic{
    Set-Location $MSQUIC_DIR
    Write-Host "msquic开始编译"
    &./scripts/build.ps1 -Config Release -Clean -Static -DisableTest -DisableTools -StaticCRT
    if (Test-Path -Path "$MSQUIC_OUT_DIR/msquic.lib")
    {
        Write-Host "msquic编译完成"
    }
    else
    {
        Write-Host "msquic编译失败"
        Set-Location $WORK_DIR
        exit
    }
}


function release_gt_lib{
    Set-Location "$WORK_DIR/libcs"
    Write-Host "开始编译gt server/client"
    go build -tags release -trimpath -ldflags "-s -w"  -buildmode=c-archive -o release/windows/gt.lib ./lib/export
    if (Test-Path -Path "./release/windows/gt.lib")
    {
        Write-Host "gt server/client编译完成"
    }
    else
    {
        Write-Host "gt server/client编译失败"
        Set-Location $WORK_DIR
        exit
    }
}

function release_gt_exe{
    Set-Location $WORK_DIR
    Write-Host "开始编译gt"
    cargo build --target x86_64-pc-windows-msvc -r
    Write-Host "gt编译完成"
}

if (!(Test-Path -Path "$WEBRTC_OUT_DIR/webrtc.lib")){
    complie_webrtc
}

if (!(Test-Path -Path "$MSQUIC_OUT_DIR/msquic.lib")){
    complie_msquic
}
release_gt_lib
release_gt_exe