import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";

export function useCheckout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
        mutationFn: (bookingId) => updateBooking(bookingId, {
            status: "checked-out",
        }),
        onSuccess: () => {
            toast.success("Booking successfully edited");
            queryClient.invalidateQueries({ active: true })
            navigate("/");
        },

        onError: () => toast.error("There was an error while checking in"),
    })


    return { isCheckingOut, checkout };
}
