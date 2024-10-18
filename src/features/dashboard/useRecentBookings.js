import { useQuery } from "@tanstack/react-query"
import { getBookingsAfterDate } from "../../services/apiBookings"
import { useSearchParams } from "react-router-dom"
import { subDays } from "date-fns";

export function useRecentBookings() {
    const [searchParams] = useSearchParams()

    const numDays = !searchParams.get('last')
        ? 7
        : Number(searchParams.get("last"));
    const queryData = subDays(new Date(), numDays).toISOString()
    const { data: recentBookings, isLoading: isRecentBookingLoading } = useQuery({
        queryFn: () => getBookingsAfterDate(queryData),
        queryKey: ["bookings", `last-${numDays}`]
    })

    return { recentBookings, isRecentBookingLoading, }
}
