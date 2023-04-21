function main(steps, stepLength, speed) {
    let distanceInMeters = (steps * stepLength)
    let speedMetersInHour = speed * 1000;
    let speedMetersInSecond = speedMetersInHour / 3600;
    let neededTimeInSec = (distanceInMeters / speedMetersInSecond) + Math.floor(distanceInMeters / 500) * 60;

    let hours = Math.floor(neededTimeInSec / 3600);
    let minutes = Math.floor((neededTimeInSec - hours * 3600) / 60);
    let seconds = Math.ceil(neededTimeInSec % 60);

    hours = hours < 10 ? `0${hours}` : hours
    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds < 10 ? `0${seconds}` : seconds

    console.log(`${hours}:${minutes}:${seconds}`);
}

main(20000, 0.60, 5)
main(2564, 0.70, 5.5)