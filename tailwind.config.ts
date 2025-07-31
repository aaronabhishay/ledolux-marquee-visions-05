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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				futura: ['Futura Condensed Extra Bold', 'Arial Black', 'sans-serif'],
				manrope: ['Manrope', 'sans-serif'],
			},
			colors: {
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
				gold: {
					DEFAULT: 'hsl(var(--gold))',
					foreground: 'hsl(var(--gold-foreground))'
				},
				ash: {
					DEFAULT: 'hsl(var(--ash))',
					light: 'hsl(var(--ash-light))',
					dark: 'hsl(var(--ash-dark))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			letterSpacing: {
				'ultra-wide': '0.25em',
			},
			backgroundImage: {
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-ash': 'var(--gradient-ash)',
				'gradient-overlay': 'var(--gradient-overlay)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			boxShadow: {
				'premium': 'var(--shadow-premium)',
				'gold-glow': 'var(--shadow-gold-glow)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8) translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'2%': { opacity: '0.8' },
					'4%': { opacity: '1' },
					'6%': { opacity: '0.9' },
					'8%': { opacity: '1' },
					'10%': { opacity: '0.95' },
					'12%': { opacity: '1' },
					'14%': { opacity: '0.9' },
					'16%': { opacity: '1' },
					'18%': { opacity: '0.8' },
					'20%': { opacity: '1' },
					'22%': { opacity: '0.9' },
					'24%': { opacity: '1' },
					'26%': { opacity: '0.95' },
					'28%': { opacity: '1' },
					'30%': { opacity: '0.9' },
					'32%': { opacity: '1' },
					'34%': { opacity: '0.8' },
					'36%': { opacity: '1' },
					'38%': { opacity: '0.9' },
					'40%': { opacity: '1' },
					'42%': { opacity: '0.95' },
					'44%': { opacity: '1' },
					'46%': { opacity: '0.9' },
					'48%': { opacity: '1' },
					'50%': { opacity: '0.8' },
					'52%': { opacity: '1' },
					'54%': { opacity: '0.9' },
					'56%': { opacity: '1' },
					'58%': { opacity: '0.95' },
					'60%': { opacity: '1' },
					'62%': { opacity: '0.9' },
					'64%': { opacity: '1' },
					'66%': { opacity: '0.8' },
					'68%': { opacity: '1' },
					'70%': { opacity: '0.9' },
					'72%': { opacity: '1' },
					'74%': { opacity: '0.95' },
					'76%': { opacity: '1' },
					'78%': { opacity: '0.9' },
					'80%': { opacity: '1' },
					'82%': { opacity: '0.8' },
					'84%': { opacity: '1' },
					'86%': { opacity: '0.9' },
					'88%': { opacity: '1' },
					'90%': { opacity: '0.95' },
					'92%': { opacity: '1' },
					'94%': { opacity: '0.9' },
					'96%': { opacity: '1' },
					'98%': { opacity: '0.8' }
				},
				'glow': {
					'0%, 100%': {
						filter: 'drop-shadow(0 0 5px rgba(255, 193, 7, 0.3)) drop-shadow(0 0 10px rgba(255, 193, 7, 0.2))'
					},
					'50%': {
						filter: 'drop-shadow(0 0 8px rgba(255, 193, 7, 0.5)) drop-shadow(0 0 15px rgba(255, 193, 7, 0.3)) drop-shadow(0 0 20px rgba(255, 193, 7, 0.1))'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						filter: 'drop-shadow(0 0 3px rgba(255, 193, 7, 0.4))'
					},
					'50%': {
						filter: 'drop-shadow(0 0 6px rgba(255, 193, 7, 0.6)) drop-shadow(0 0 12px rgba(255, 193, 7, 0.3))'
					}
				},
				'ambient-flicker': {
					'0%, 100%': { opacity: '0.3' },
					'25%': { opacity: '0.4' },
					'50%': { opacity: '0.2' },
					'75%': { opacity: '0.35' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'flicker': 'flicker 3s infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 1.5s ease-in-out infinite',
				'ambient-flicker': 'ambient-flicker 4s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
