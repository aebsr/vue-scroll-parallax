# Parallax Component

The `Parallax` component is the core building block for creating parallax scroll effects.

## Basic Usage

```vue
<template>
  <Parallax :speed="10">
    <div>This content will parallax</div>
  </Parallax>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| speed | number | 0 | The speed of the parallax effect |
| disabled | boolean | false | Whether to disable the parallax effect |
| translateY | [number, number] | undefined | Vertical translation range |
| translateX | [number, number] | undefined | Horizontal translation range |
| rotate | [number, number] | undefined | Rotation range in degrees |
| scale | [number, number] | undefined | Scale range |
| opacity | [number, number] | undefined | Opacity range |

## Examples

### Basic Movement

```vue
<Parallax :speed="10">
  <div>Moves up as you scroll down</div>
</Parallax>
```

### Complex Animation

```vue
<Parallax
  :translate-y="[-50, 50]"
  :rotate="[-15, 15]"
  :opacity="[1, 0]"
>
  <div>Complex parallax animation</div>
</Parallax>
```

### Responsive Design

```vue
<Parallax
  :speed="10"
  :disabled="windowWidth < 768"
>
  <div>Disabled on mobile</div>
</Parallax>
``` 