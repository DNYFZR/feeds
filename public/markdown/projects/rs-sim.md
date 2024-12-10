<h1 align="center"> Discrete Event Simulation with Rust</h1>

This is a low level implementation of a discrete event simulator in Rust...

### Functionality

- event engine for parallel execution of models, within local memory constraints

- core discrete event simulator

- parquet file i/o

- aggregation system
  
  - summarise total events per timestep in each simulation & combine into a single table
  
  - the same, but using a converted target value (e.g. replacement cost)
  
  - the age profile across each timestep for each iteration

- more to follow...

### Dependencies

- **ndarray-rand** : random number generation
- **rayon** : parallel processing engine
- **polars** : dataframe ops & parquet file i/o