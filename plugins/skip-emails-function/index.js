// The Netlify Emails plugin (installed from the dashboard) always generates an
// `emails` function, and its upload makes deploys fail. This site doesn't send
// emails (the contact form uses Netlify Forms), so remove that function before
// functions are bundled. Dashboard plugins run first, so this onBuild runs after
// the Emails plugin. Delete this plugin once Emails is uninstalled.
import { rmSync } from 'node:fs'
import { join } from 'node:path'

export const onBuild = () => {
  rmSync(join('.netlify', 'functions-internal', 'emails'), {
    recursive: true,
    force: true,
  })
  console.log('Removed the unused Netlify Emails function from this build.')
}
