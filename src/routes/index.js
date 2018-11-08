import CardsList from "../components/CardsList/CardsList";
import CardDetails from "../components/CardDetails/CardDetails";
import BookingCardsList from "../components/BookingCardsList/BookingCardsList";

export default {
  routes: [
    {
      id: 1,
      path: "/movies",
      component: CardsList,
      exact: true
    },
    {
      id: 2,
      path: "/movie/:id",
      component: CardDetails,
      exact: true
    },
    {
      id: 3,
      path: "/bookings/:userId",
      component: BookingCardsList,
      exact: true
    },
   ],
  redirects: [
    {
      id: 1,
      from: "/",
      to: "/movies",
      exact: true,
    },
    {
      id: 2,
      from: "/redirect",
      to: "/movies"
    }
  ]
};
