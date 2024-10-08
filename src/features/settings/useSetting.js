import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSetting() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['setting'],
        queryFn: getSettings
    })
    return { isLoading, error, data }
}