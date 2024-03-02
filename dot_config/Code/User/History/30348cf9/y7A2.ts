import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '8px',
		'--theme-rounded-container': '6px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #ff8000
		'--color-primary-50': '255 236 217', // #ffecd9
		'--color-primary-100': '255 230 204', // #ffe6cc
		'--color-primary-200': '255 223 191', // #ffdfbf
		'--color-primary-300': '255 204 153', // #ffcc99
		'--color-primary-400': '255 166 77', // #ffa64d
		'--color-primary-500': '255 128 0', // #ff8000
		'--color-primary-600': '230 115 0', // #e67300
		'--color-primary-700': '191 96 0', // #bf6000
		'--color-primary-800': '153 77 0', // #994d00
		'--color-primary-900': '125 63 0', // #7d3f00
		// secondary | #D90DFF
		'--color-secondary-50': '249 219 255', // #f9dbff
		'--color-secondary-100': '247 207 255', // #f7cfff
		'--color-secondary-200': '246 195 255', // #f6c3ff
		'--color-secondary-300': '240 158 255', // #f09eff
		'--color-secondary-400': '228 86 255', // #e456ff
		'--color-secondary-500': '217 13 255', // #D90DFF
		'--color-secondary-600': '195 12 230', // #c30ce6
		'--color-secondary-700': '163 10 191', // #a30abf
		'--color-secondary-800': '130 8 153', // #820899
		'--color-secondary-900': '106 6 125', // #6a067d
		// tertiary | #5E19FF
		'--color-tertiary-50': '231 221 255', // #e7ddff
		'--color-tertiary-100': '223 209 255', // #dfd1ff
		'--color-tertiary-200': '215 198 255', // #d7c6ff
		'--color-tertiary-300': '191 163 255', // #bfa3ff
		'--color-tertiary-400': '142 94 255', // #8e5eff
		'--color-tertiary-500': '94 25 255', // #5E19FF
		'--color-tertiary-600': '85 23 230', // #5517e6
		'--color-tertiary-700': '71 19 191', // #4713bf
		'--color-tertiary-800': '56 15 153', // #380f99
		'--color-tertiary-900': '46 12 125', // #2e0c7d
		// success | #4bc814
		'--color-success-50': '228 247 220', // #e4f7dc
		'--color-success-100': '219 244 208', // #dbf4d0
		'--color-success-200': '210 241 196', // #d2f1c4
		'--color-success-300': '183 233 161', // #b7e9a1
		'--color-success-400': '129 217 91', // #81d95b
		'--color-success-500': '75 200 20', // #4bc814
		'--color-success-600': '68 180 18', // #44b412
		'--color-success-700': '56 150 15', // #38960f
		'--color-success-800': '45 120 12', // #2d780c
		'--color-success-900': '37 98 10', // #25620a
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #d40000
		'--color-error-50': '249 217 217', // #f9d9d9
		'--color-error-100': '246 204 204', // #f6cccc
		'--color-error-200': '244 191 191', // #f4bfbf
		'--color-error-300': '238 153 153', // #ee9999
		'--color-error-400': '225 77 77', // #e14d4d
		'--color-error-500': '212 0 0', // #d40000
		'--color-error-600': '191 0 0', // #bf0000
		'--color-error-700': '159 0 0', // #9f0000
		'--color-error-800': '127 0 0', // #7f0000
		'--color-error-900': '104 0 0', // #680000
		// surface | #464650
		'--color-surface-50': '227 227 229', // #e3e3e5
		'--color-surface-100': '218 218 220', // #dadadc
		'--color-surface-200': '209 209 211', // #d1d1d3
		'--color-surface-300': '181 181 185', // #b5b5b9
		'--color-surface-400': '126 126 133', // #7e7e85
		'--color-surface-500': '70 70 80', // #464650
		'--color-surface-600': '63 63 72', // #3f3f48
		'--color-surface-700': '53 53 60', // #35353c
		'--color-surface-800': '42 42 48', // #2a2a30
		'--color-surface-900': '34 34 39' // #222227
	}
};
