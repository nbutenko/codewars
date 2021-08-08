const match = (candidate, job) => {
    if(!candidate.minSalary || !job.maxSalary) throw 'no value';
    return job.maxSalary >= (candidate.minSalary * 0.9);
}