function main(worker) {
    if (worker.dizziness === true){
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false
    }
    return worker;
}

main({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })

main({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true })

main({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false })