import { FC } from 'react'
// import { Input as AntdInput } from 'antd'
import { Controller } from 'react-hook-form'


import { IInput } from './types'

const Input: FC<IInput> = ({
  name,
  defaultValue,
  value,
  label,
  placeholder,
  control,
  password,
  disabled,
  type,
  onChange,
  onFocus,
  onBlur,
  maxLength,
  onKeyDown,
}) => {
  return (
    <Controller
      shouldUnregister
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { onChange: controleronChange, value }, formState: { errors } }) => {
        return (
          <div style={{width: '100%'}}>
            {!!label && <label>{label}</label>}
            {password ? (
              <input
                disabled={disabled}
                name={name}
                type='password'
                placeholder={placeholder}
                // status={errors[name] ? 'error' : ''}
                value={value}
                {...(onFocus ? { onFocus } : {})}
                {...(onBlur ? { onBlur } : {})}
                onChange={(e) => {
                  controleronChange(e)
                  if (onChange) {
                    onChange(e)
                  }
                }}
              />
            ) : (
              <input
                disabled={disabled}
                maxLength={maxLength}
                name={name}
                placeholder={placeholder}
                // status={errors[name] ? 'error' : ''}
                type={type}
                value={value}
                onKeyDown={onKeyDown}
                {...(onFocus ? { onFocus } : {})}
                {...(onBlur ? { onBlur } : {})}
                onChange={(e) => {
                  controleronChange(e)
                  if (onChange) {
                    onChange(e)
                  }
                }}
              />
            )}
            {!!errors[name] && <span style={{color: 'red'}}>{errors?.[name as any]?.message}</span>}
          </div>
        )
      }}
    />
  )
}

export default Input
