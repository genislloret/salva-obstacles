let sonar = 0
cuteBot.motors(70, 70)
basic.forever(function () {
    sonar = 0.65 * cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar > 2 && sonar < 20) {
        cuteBot.motors(42, -100)
        basic.pause(100)
    }
})
