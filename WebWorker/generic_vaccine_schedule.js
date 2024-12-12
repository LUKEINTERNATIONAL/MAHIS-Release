const genericsService = {
    async setOfflineGenericVaccineSchedule() { 

        const vaccineScheduleData = await DatabaseManager.getOfflineData("genericVaccineSchedule");

        if (!vaccineScheduleData) {
            const vaccineSchedule = await ApiService.getData("/eir/schedule/generic", { paginate: false });
            
            if (vaccineSchedule && Object.keys(vaccineSchedule).length > 0) {
                await DatabaseManager.overRideRecord("genericVaccineSchedule", {
                    genericVaccineSchedule: vaccineSchedule,
                });
            }

            return vaccineSchedule;
        } else { 
            return vaccineScheduleData[0].genericVaccineSchedule
        }
        
    }
}