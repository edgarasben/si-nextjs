import React from 'react'

export default function Box({
  as = 'div',
  full,
  centered,
  children,
  columnsClass,
  className,
  ...props
}) {
  const columnCount = children.length
  const gridColumns = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12',
  }

  const classNames = [
    'grid gap-4 sm:gap-6 md:gap-8',
    columnsClass ? columnsClass : gridColumns[columnCount],
    full ? 'p-0' : 'px-4 sm:px-6 md:px-8 3xl:px-16',
    centered && 'mx-auto lg:max-w-4xl 2xl:max-w-6xl 3xl:max-w-7xl',
    className ? className : '',
  ].join(' ')

  return React.createElement(as, { className: classNames, ...props }, children)
}
