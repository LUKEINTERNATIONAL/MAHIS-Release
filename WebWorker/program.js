const programService = {
    async setOfflinePrograms() {
        const programsData = await DatabaseManager.getOfflineData("programs");
        if (!programsData || TOTALS.total_programs != programsData[0].programs.length) {
            const programs = await ApiService.getData("/programs", { page_size: 1000 });
            if (programs && Object.keys(programs).length > 0) {
                await DatabaseManager.overRideCollection("programs", {
                    programs: programs,
                });
            }
            return programs;
        } else {
            return programsData[0].programs;
        }
    },
};
