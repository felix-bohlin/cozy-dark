import { cozyDark } from "./cozy-dark/cozy-dark.js"
import fs from "fs/promises"

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    fs.writeFile("./themes/cozy-dark.json", JSON.stringify(cozyDark, null, 2)),
  )
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
