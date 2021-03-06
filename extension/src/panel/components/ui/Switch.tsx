import React from "react"
import "./Switch.scss"

type Props = {
  on: boolean
}

export const Switch: React.FC<
  Props & React.HTMLAttributes<HTMLButtonElement>
> = props => {
  const { on, className = "", ...buttonProps } = props
  const buttonClassName = [
    className,
    "switch__button",
    on ? "switch__button--on" : "switch__button--off"
  ].join(" ")

  return (
    <div className="switch">
      <input
        className="switch__input"
        type="checkbox"
        checked={on}
        onChange={() => {
          // changing is handled by clicking the button
        }}
      />
      <button
        className={buttonClassName}
        aria-label="Toggle"
        type="button"
        {...buttonProps}
      />
    </div>
  )
}
