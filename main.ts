basic.forever(function () {
    let distantzia = 0
    if (distantzia > 40) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    } else if (distantzia > 30) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 60)
    } else if (distantzia > 10) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 20)
    } else if (distantzia > 3) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
