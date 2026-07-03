import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '20px',
				md: '32px',
			},
			screens: {
				'2xl': '1264px',
			},
		},
		extend: {
			colors: {
				/* amoo.dev design system v1 — see docs/design-brief */
				ink: '#0A0A0A',      /* page background, everywhere */
				surface: '#141414',  /* cards, code blocks, inputs */
				line: '#262626',     /* borders, dividers, rules */
				paper: '#F4F4F2',    /* headings, body text, primary UI */
				signal: {
					DEFAULT: '#38CF7F', /* CTAs + links only, never decoration */
					hover: '#4FD98D',
					active: '#2DB86C',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			fontFamily: {
				display: ['Archivo', 'system-ui', 'sans-serif'],
				sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
				mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				/* entrance: 0.7s translateY(18px) -> 0 + fade */
				rise: {
					from: { opacity: '0', transform: 'translateY(18px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' }
				},
				'cursor-blink': {
					'0%, 49%': { opacity: '1' },
					'50%, 100%': { opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				rise: 'rise 0.7s cubic-bezier(0.22,1,0.36,1) both',
				marquee: 'marquee 26s linear infinite',
				'cursor-blink': 'cursor-blink 1.1s step-end infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
