import './App.css'

function App() {

  return (
    <>
      <div className="app">
        {/* <!-- Header --> */}
        <header className="page-header">
          <h1>Workout</h1>
          <button className="icon-btn" aria-label="Pilih jenis workout">⌄</button>
        </header>

        <main className="content">

          {/* <!-- Start Empty Workout --> */}
          <button className="start-empty-btn">
            <span className="plus-icon">+</span>
            Start Empty Workout
          </button>

          {/* <!-- Routines section header --> */}
          <div className="section-header">
            <h2>Routines</h2>
            <button className="icon-btn" aria-label="Tambah folder routine">📁+</button>
          </div>

          {/* <!-- New Routine / Explore --> */}
          <div className="routine-actions">
            <button className="action-card">
              <span className="action-icon">📋</span>
              New Routine
            </button>
            <button className="action-card">
              <span className="action-icon">🔍</span>
              Explore
            </button>
          </div>

          {/* <!-- My Routines toggle --> */}
          <button className="my-routines-toggle">
            <span className="chevron">▾</span>
            My Routines (10)
          </button>

          {/* <!-- Routine list --> */}
          <section className="routine-list">

            <article className="routine-card">
              <div className="routine-card-top">
                <div>
                  <h3>Treadmill Zone 2</h3>
                  <p className="routine-subtitle">Walking</p>
                </div>
                <button className="more-btn" aria-label="Opsi lainnya">⋯</button>
              </div>
              <button className="start-routine-btn">Start Routine</button>
            </article>

            <article className="routine-card">
              <div className="routine-card-top">
                <div>
                  <h3>Lower Back</h3>
                  <p className="routine-subtitle">Superman</p>
                </div>
                <button className="more-btn" aria-label="Opsi lainnya">⋯</button>
              </div>
              <button className="start-routine-btn">Start Routine</button>
            </article>

            <article className="routine-card">
              <div className="routine-card-top">
                <div>
                  <h3>Calves</h3>
                  <p className="routine-subtitle">Calf Press (Machine)</p>
                </div>
                <button className="more-btn" aria-label="Opsi lainnya">⋯</button>
              </div>
              <button className="start-routine-btn">Start Routine</button>
            </article>

          </section>

        </main>

        {/* <!-- Bottom navigation --> */}
        <nav className="bottom-nav">
          <button className="nav-item">
            <span className="nav-icon">🏠</span>
            <span className="nav-label">Home</span>
          </button>
          <button className="nav-item active">
            <span className="nav-icon">🏋️</span>
            <span className="nav-label">Workout</span>
          </button>
          <button className="nav-item">
            <span className="nav-icon">👤</span>
            <span className="nav-label">Profile</span>
          </button>
        </nav>

      </div>
    </>
  )
}

export default App
