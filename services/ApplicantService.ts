class ApplicantService {

    private constructor() { }
    private static instance: ApplicantService;
    static getInstance() {
        if (!ApplicantService.instance) {
            ApplicantService.instance = new ApplicantService();
        }
        return ApplicantService.instance;
    }

    async getApplicants() {
        const response = await fetch('/api/applicants', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        return data;
    }
}

export default ApplicantService.getInstance();