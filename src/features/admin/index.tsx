import Admin from "./Admin"
import { create } from "./actions/create"
import { read } from "./actions/read"
import { update } from "./actions/update"
import { del } from "./actions/del"

import { 
    setAdmin,
    selectAdmin,
    selectNotification,
 } from "./adminSlice"

export {
    Admin,
    setAdmin,
    selectAdmin,
    selectNotification,
    create,
    read,
    update,
    del,
}
