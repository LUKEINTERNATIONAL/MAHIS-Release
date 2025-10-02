const ddeService = {
    async setDDEIds() {
        try {
            if (USEMODS == "false") {
                // Fetch existing offline DDE data
                const existingDDE = await DatabaseManager.getOfflineData("dde");

                // Constants
                const MAX_IDS_COUNT = 10;
                const today = new Date().toDateString();

                // Determine how many new IDs to fetch
                let requiredIdCount = MAX_IDS_COUNT;

                // Check if existing DDE data exists and is from today
                if (existingDDE && existingDDE.length > 0) {
                    requiredIdCount -= existingDDE.length || 0;
                }

                // Skip fetching if we already have enough IDs
                if (requiredIdCount <= 0) {
                    return existingDDE;
                }

                // Fetch new DDE IDs
                let newDDEIds = await ApiService.getData(`/dde/patients/sync_npids?count=${requiredIdCount}&program_id=${PROGRAMID}`);

                // Ensure we have valid IDs
                newDDEIds = newDDEIds?.npids || [];

                // Merge with existing IDs if applicable
                let finalDDEIds = newDDEIds;
                // if (existingDDE && existingDDE[0]?.id_created_date === today) {
                if (existingDDE) {
                    finalDDEIds = [...existingDDE, ...newDDEIds];
                }

                // Update database if we have new IDs
                if (finalDDEIds.length > 0) {
                    await DatabaseManager.overRideCollection("dde", finalDDEIds);
                }

                return finalDDEIds;
            }
        } catch (error) {
            console.error("Error in setDDEIds:", error);
            // Consider adding appropriate error handling strategy
            // This could be throwing the error, returning an empty array, or a default value
            return [];
        }
    },
};
