# WWs Hybrid App Dashboard Demo

## Prerequisites
```
# Cordova CLI
sudo npm install -g cordova

# iOS simulator (Optional, normally installed with Xcode)  
sudo npm install -g ios-sim
```

## Building Cordova App 
```
# Clone repository
git clone https://github.com/ChangoBuitrago/dashboard.git

# Access App directory
cd dashboard

# Install dependencies
npm install

# Build App
npm run build
```

## Running Cordova App 
```
# Access App distribution directory
cd cordovaApp

# Adding iOS platform support
cordova platform add ios

# on a iPhone-8-Plus
cordova emulate ios --target="iPhone-8-Plus, 11.2"

# on a Ipad-Air-2
cordova emulate ios --target="iPad-Air-2, 11.2"
```

## List available iOS Simulators 
```
cordova emulate ios --list
```
