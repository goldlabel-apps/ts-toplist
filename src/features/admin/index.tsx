import Admin from "./Admin"
import Clicks from "./Clicks"
import { create } from "./actions/create"
import { read } from "./actions/read"
import { update } from "./actions/update"
import { del } from "./actions/del"
import { fetchClicks } from "./actions/fetchClicks"

import { 
    setAdmin,
    selectAdmin,
    selectNotification,
 } from "./adminSlice"

export {
    Admin,
    Clicks,
    setAdmin,
    selectAdmin,
    selectNotification,
    create,
    read,
    update,
    del,
    fetchClicks,
}
