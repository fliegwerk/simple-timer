# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
## [0.4.3] - 2020-06-16
### Added
- some unit tests
- CI configuration that, for every commit, runs the project's tests
### Changed
- restricted file types selectable when selecting a logo
### Fixed
- handling of bigger images (which can't get stored in the `localStorage`), cf. [#21](https://github.com/fliegwerk/simple-timer/issues/21).
## [0.4.2] - 2020-06-15
### Fixed
- #19: Issue with spinner buttons in Firefox
## [0.4.1] - 2020-06-15
### Added
- Application Icon
- Logo in `README.md`
### Changed
- Favicon
- Meta Description
- Icons in web manifest
## [0.4.0] - 2020-06-14
### Added
- `is-electron` library to detect Electron platform executions and adjust the UI accordingly
- Electron-specific styling to make native apps feel more native
- Necessary code for adding theming at a later stage
- Added auto-adjustment to preferred color scheme (dark or light) based on Browser/System preferences on the Electron native app platform
- Offline support by serving app as PWA
- Code of Conduct
- Issue Templates
### Changed
- Open external links in system browser in native app version
- Unified colors in styling
- Use CSS variables for colors
## [0.3.7] - 2020-06-13
### Changed
- Adjusted CI config
### Removed
- `repository` field in `package.json` as it lead to `electron-builder` failing builds due to non-existent `GH_Token` while trying to release the package in local builds
- *per-push* electron native executable CI builds
## [0.3.6] - 2020-06-13
### Added
- `repository` in `package.json`
### Fixed
- (hopefully:) CI Config
## [0.3.5] - 2020-06-13
### Fixed
- (hopefully:) CI Config
## [0.3.4] - 2020-06-13
### Fixed
- (hopefully) release creation CI config
## [0.3.3] - 2020-06-13
### Fixed
- (hopefully) release creation CI config
## [0.3.2] - 2020-06-13
## [0.3.1] - 2020-06-13
### Added
- GitHub Release Creation script, attempt 1
## [0.3.0] - 2020-06-13
### Added
- version number in footer
- Electron wrapper for native app distribution
## [0.2.0] - 2020-06-13
### Added
- changelog (+ `meta-tools` to keep it up to date)
### Changed
- folder structure of components
- the application now remembers logo, title and selected date
## [0.1.3] - 2020-06-13
### Added
- ability to add a logo
- editable HTML title
## [0.1.2] - 2020-06-13
### Fixed
- `homepage` path in `package.json` to support hosting in sub-directories (e.g., `https://example.com/simple-timer/`)

## [0.1.1] - 2020-06-13
### Changed
- CI-workflow

## 0.1.0 - 2020-06-12
Initial prerelease

[Unreleased]: https://github.com/fliegwerk/simple-timer/compare/v0.4.3...HEAD
[0.1.3]: https://github.com/fliegwerk/simple-timer/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/fliegwerk/simple-timer/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/fliegwerk/simple-timer/compare/v0.1.0...v0.1.1
[0.2.0]: https://github.com/fliegwerk/simple-timer/compare/v0.1.3...v0.2.0
[0.3.0]: https://github.com/fliegwerk/simple-timer/compare/v0.2.0...v0.3.0
[0.3.1]: https://github.com/fliegwerk/simple-timer/compare/v0.3.0...v0.3.1
[0.3.2]: https://github.com/fliegwerk/simple-timer/compare/v0.3.1...v0.3.2
[0.3.3]: https://github.com/fliegwerk/simple-timer/compare/v0.3.2...v0.3.3
[0.3.4]: https://github.com/fliegwerk/simple-timer/compare/v0.3.3...v0.3.4
[0.3.5]: https://github.com/fliegwerk/simple-timer/compare/v0.3.4...v0.3.5
[0.3.6]: https://github.com/fliegwerk/simple-timer/compare/v0.3.5...v0.3.6
[0.3.7]: https://github.com/fliegwerk/simple-timer/compare/v0.3.6...v0.3.7
[0.4.0]: https://github.com/fliegwerk/simple-timer/compare/v0.3.7...v0.4.0
[0.4.1]: https://github.com/fliegwerk/simple-timer/compare/v0.4.0...v0.4.1
[0.4.2]: https://github.com/fliegwerk/simple-timer/compare/v0.4.1...v0.4.2
[0.4.3]: https://github.com/fliegwerk/simple-timer/compare/v0.4.2...v0.4.3
