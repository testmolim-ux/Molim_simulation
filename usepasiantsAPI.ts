export type Patient = {
  id: string;
  name: string;
};

export async function fetchPatients(): Promise<Patient[]> {
  // Minimal placeholder: in real app replace with actual API calls
  return Promise.resolve([
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
  ]);
}

export default fetchPatients;
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPatients } from "./endpoints/patients_GET.schema";
import { postPatients, type InputType as CreatePatientInput } from "./endpoints/patients_POST.schema";
import { postPatientsSearch, type InputType as SearchPatientsInput } from "./endpoints/patients/search_POST.schema";
import { toast } from "./helpers/toast";

export const PATIENTS_QUERY_KEY = ["patients"] as const;

/**
 * A React Query hook to fetch all patients.
 * @returns The result of the useQuery hook.
 */
export const usePatients = () => {
  return useQuery({
    queryKey: PATIENTS_QUERY_KEY,
    queryFn: async () => {
      const result = await getPatients();
      return result.patients;
    },
  });
};

export const useCreatePatient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newPatient: CreatePatientInput) => postPatients(newPatient),
    onSuccess: () => {
      toast.success("Patient file created successfully.");
      return queryClient.invalidateQueries({ queryKey: PATIENTS_QUERY_KEY });
    },
    onError: (error) => {
      console.error("Error creating patient:", error);
      toast.error(error instanceof Error ? error.message : "Failed to create patient file.");
    },
  });
};

export const useSearchPatients = () => {
  return useMutation({
    mutationFn: (searchInput: SearchPatientsInput) => postPatientsSearch(searchInput),
    onSuccess: (data) => {
      if (data.patients.length === 0) {
        toast.info("No patients found matching your search.");
      } else {
        toast.success(`${data.patients.length} patient(s) found.`);
      }
    },
    onError: (error) => {
      console.error("Error searching patients:", error);
      toast.error(error instanceof Error ? error.message : "An error occurred during the search.");
    },
  });
};
