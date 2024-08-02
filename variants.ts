export const fadeIn = (direction: string, delay: number) => {
      return {
            hidden: {
                  y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
                  x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            },
            show: {
                  y: 0,
                  x: 0,
                  opacity: 1,
                  transition: {
                        type: 'tween',
                        duration: 1.2,
                        delay: delay,
                        ease: [0.25, 0.25, 0.25, 0.75],
                  }
            }
      }
}

export const opacite = (direction: string, delay: number) => {
      return {
            hidden: {
                  opacity: direction === 'up' ? 0.09 : direction === 'down' ? 0.09 : 0.09
            },
            show: {
                  opacity: 1,
                  transition: {
                        type: 'tween',
                        duration: 0.5,
                        delay: delay,
                        ease: [0.25, 0.25, 0.25, 0.75],
                  }
            }
      }
}