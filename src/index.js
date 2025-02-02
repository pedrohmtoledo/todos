import "./styles/static.css"
import "./styles/cards.css"
import taskIMg from "./img/task.svg"
import Task from "./modules/todos.js"
import Projects from "./modules/project.js"
import renderStatic from "./modules/static.js"
import "./styles/dialog.css"
import { openTaskDialog, submitTask } from "./modules/task.js"
import renderDialog from "./modules/dialog.js"
import createCard from "./modules/cards.js"
import dom from "./modules/dom.js"
import { uniqueId } from "./modules/helper.js"
import { isToday, formatDistance, subDays, format } from "date-fns";




dom();
