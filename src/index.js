import { cozyDark } from "./cozy-dark/cozy-dark.js"
import fs from "fs/promises"

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile(
        "./themes/cozy-dark.json",
        JSON.stringify(cozyDark, null, 2)
      ),
    ])
  )
  .catch(() => process.exit(1))
