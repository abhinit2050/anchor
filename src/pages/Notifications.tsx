

import { addNotification, clearNotifications, fetchNotifications } from "../features/notfications/notificationsSlice"
import { useAppDispatch, useAppSelector } from "../store/hooks"

export default function Notifications() {
  const dispatch = useAppDispatch()
  const { items, loading, error } = useAppSelector(
    (state) => state.notifications
  )

  return (
    <div>
      <h2>Notifications</h2>

      <button onClick={() => dispatch(fetchNotifications())}>
        Fetch Notifications
      </button>

      <button onClick={()=>dispatch(addNotification({id:Date.now(), message:"New notification added"}))}>
        Add Notification
        </button>

        <button onClick={()=>dispatch(clearNotifications())}>Clear Notifications</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {items.map((n) => (
          <li key={n.id}>{n.message}</li>
        ))}
      </ul>
    </div>
  )
}