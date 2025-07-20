module.exports = {
  "{apps,libs,tools}/**/*.{js,ts,json}": files => [
    `nx affected:lint --files=${files.join(',')}`,
    `nx format:write --files=${files.join(',')}`
  ],
  "{apps,libs,tools}/**/*.css": files => [
    "stylelint '**/*.css'",
    `nx format:write --files=${files.join(',')}`
  ]
}
