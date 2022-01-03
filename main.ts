radio.onReceivedString(function (receivedString) {
    if (receivedString == "ButtonD_Pressed") {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 135)
    } else if (receivedString == "ButtonE_Pressed") {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 170)
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("Shake")
})
radio.onReceivedValue(function (name, value) {
    if (name == "Y") {
        wuKong.setAllMotor(value, value)
    } else if (name == "X") {
        wuKong.setAllMotor(value, value * -1)
    }
})
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 170)
radio.setGroup(1)
wuKong.setLightMode(wuKong.LightMode.BREATH)
