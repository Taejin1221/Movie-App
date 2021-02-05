# 3.2 Component Life Cycle
## Mount
- When component is just created
- Methods cycle
    1. constructor()
    1. render()
    1. componentDidMount()

## Update
- When component's state is updated
- Methods cycle
    1. render()
    1. componentDidUpdate()

## Unmount
- When component is deleted
- Methods cycle
    1. componentWillUnmount()