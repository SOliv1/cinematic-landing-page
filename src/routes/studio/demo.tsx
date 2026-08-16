import { Link, createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/demo')({
  component: DemoPage,
})

type Season = 'spring' | 'summer' | 'autumn' | 'winter'
type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night'
type Weather = 'clear' | 'cloudy' | 'rain' | 'snow'
type Mood = 'grounding' | 'clarity' | 'uplift' | 'calm' | 'focus'
type LiveWeatherMode = 'idle' | 'loading' | 'active' | 'error'
type CapabilityId =
  | 'spring'
  | 'evening'
  | 'rain'
  | 'winter'
  | 'calm'
  | 'focus'
  | 'cycle'
  | 'live'
  | 'lexicon'

type SimulationStep = {
  season: Season
  time: TimeOfDay
  weather: Weather
  mood: Mood
}

const simulationSteps: SimulationStep[] = [
  { season: 'spring', time: 'morning', weather: 'clear', mood: 'clarity' },
  { season: 'spring', time: 'afternoon', weather: 'cloudy', mood: 'grounding' },
  { season: 'summer', time: 'afternoon', weather: 'clear', mood: 'uplift' },
  { season: 'summer', time: 'evening', weather: 'rain', mood: 'calm' },
  { season: 'autumn', time: 'evening', weather: 'cloudy', mood: 'grounding' },
  { season: 'autumn', time: 'night', weather: 'rain', mood: 'focus' },
  { season: 'winter', time: 'night', weather: 'snow', mood: 'calm' },
  { season: 'winter', time: 'morning', weather: 'clear', mood: 'clarity' },
]

const seasonPalettes: Record<Season, { tint: string; label: string }> = {
  spring: { tint: 'rgba(180, 255, 210, 0.4)', label: 'fresh, green, gently opening' },
  summer: { tint: 'rgba(255, 220, 150, 0.4)', label: 'warm, bright, expansive' },
  autumn: { tint: 'rgba(255, 180, 120, 0.4)', label: 'amber, grounded, reflective' },
  winter: { tint: 'rgba(180, 200, 255, 0.4)', label: 'cool, clear, still' },
}

const timePalettes: Record<TimeOfDay, { shade: string; label: string }> = {
  morning: { shade: 'rgba(255, 240, 200, 0.3)', label: 'soft morning lift' },
  afternoon: { shade: 'rgba(255, 255, 220, 0.2)', label: 'open afternoon clarity' },
  evening: { shade: 'rgba(200, 160, 255, 0.3)', label: 'slow evening descent' },
  night: { shade: 'rgba(40, 60, 120, 0.5)', label: 'quiet night focus' },
}

const weatherPalettes: Record<Weather, { glow: string; label: string }> = {
  clear: { glow: '0 0 40px rgba(255,255,255,0.2)', label: 'clear shimmer' },
  cloudy: { glow: '0 0 20px rgba(200,200,200,0.2)', label: 'soft cloud veil' },
  rain: { glow: '0 0 60px rgba(120,160,255,0.3)', label: 'rain-lit highlights' },
  snow: { glow: '0 0 80px rgba(255,255,255,0.4)', label: 'snow hush' },
}

const moodLexicon: Record<Mood, { filter: string; label: string; note: string }> = {
  grounding: {
    filter: 'brightness(0.95) saturate(0.9)',
    label: 'Grounding',
    note: 'Softens brightness and lowers saturation so the interface feels steady.',
  },
  clarity: {
    filter: 'brightness(1.1) saturate(1.1)',
    label: 'Clarity',
    note: 'Lifts brightness and colour so decisions feel cleaner and lighter.',
  },
  uplift: {
    filter: 'brightness(1.15) saturate(1.2)',
    label: 'Uplift',
    note: 'Adds warmth and energy without turning the page into noise.',
  },
  calm: {
    filter: 'brightness(0.9) saturate(0.8)',
    label: 'Calm',
    note: 'Dials the surface down for slower, more reflective interaction.',
  },
  focus: {
    filter: 'contrast(1.1) saturate(0.95)',
    label: 'Focus',
    note: 'Adds definition while keeping the atmosphere restrained.',
  },
}

const demoCapabilities: Array<{ id: CapabilityId; label: string; hint: string }> = [
  { id: 'spring', label: 'Spring tint', hint: 'Fresh green seasonal colour' },
  { id: 'evening', label: 'Evening ambience', hint: 'Slower violet time-of-day light' },
  { id: 'rain', label: 'Rain shimmer', hint: 'Blue glow and moving rain texture' },
  { id: 'winter', label: 'Winter particles', hint: 'Snow hush and particle motion' },
  { id: 'calm', label: 'Calm mood', hint: 'Dimmer, softer emotional pressure' },
  { id: 'focus', label: 'Focus mood', hint: 'Clearer contrast and definition' },
  { id: 'cycle', label: 'Guided auto-cycle', hint: 'Animates every control' },
  { id: 'live', label: 'Live weather', hint: 'Requests local weather' },
  { id: 'lexicon', label: 'Mood lexicon', hint: 'Shows the active mood meaning' },
]

function getWeatherFromCode(code: number): Weather {
  if ([71, 73, 75, 77, 85, 86].includes(code)) return 'snow'
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(code)) return 'rain'
  if ([1, 2, 3, 45, 48].includes(code)) return 'cloudy'
  return 'clear'
}

function DemoPage() {
  const [season, setSeason] = useState<Season>('spring')
  const [time, setTime] = useState<TimeOfDay>('morning')
  const [weather, setWeather] = useState<Weather>('clear')
  const [mood, setMood] = useState<Mood>('grounding')
  const [isSimulating, setIsSimulating] = useState(false)
  const [stepIndex, setStepIndex] = useState(0)
  const [liveWeatherStatus, setLiveWeatherStatus] = useState('Simulated weather is active.')
  const [liveWeatherMode, setLiveWeatherMode] = useState<LiveWeatherMode>('idle')
  const [activeCapability, setActiveCapability] = useState<CapabilityId | null>(null)
  const [capabilityStatus, setCapabilityStatus] = useState('Select a feature below to preview its behaviour in the demo surface.')

  useEffect(() => {
    if (!isSimulating) return

    const interval = window.setInterval(() => {
      setStepIndex((current) => {
        const next = (current + 1) % simulationSteps.length
        const step = simulationSteps[next]
        setSeason(step.season)
        setTime(step.time)
        setWeather(step.weather)
        setMood(step.mood)
        return next
      })
    }, 2000)

    return () => window.clearInterval(interval)
  }, [isSimulating])

  const demoStyle = useMemo(() => {
    return {
      background: `linear-gradient(${seasonPalettes[season].tint}, ${timePalettes[time].shade})`,
      boxShadow: `${weatherPalettes[weather].glow}, 0 38px 110px rgba(0, 0, 0, 0.42), 0 0 90px rgba(244, 222, 177, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.16)`,
      filter: moodLexicon[mood].filter,
    } as CSSProperties
  }, [season, time, weather, mood])

  const pauseAndSet = <T,>(setter: (value: T) => void, value: T) => {
    setIsSimulating(false)
    setLiveWeatherMode('idle')
    setLiveWeatherStatus('Manual simulated controls are active.')
    setActiveCapability(null)
    setter(value)
  }

  const toggleSimulation = () => {
    if (!isSimulating) {
      const step = simulationSteps[stepIndex]
      setSeason(step.season)
      setTime(step.time)
      setWeather(step.weather)
      setMood(step.mood)
      setLiveWeatherStatus('Guided simulated time is active.')
      setLiveWeatherMode('idle')
      setActiveCapability('cycle')
    } else {
      setLiveWeatherStatus('Simulated weather is paused.')
      setActiveCapability(null)
    }

    setIsSimulating((current) => !current)
  }

  const jumpToStep = (index: number) => {
    const step = simulationSteps[index]
    setIsSimulating(false)
    setStepIndex(index)
    setSeason(step.season)
    setTime(step.time)
    setWeather(step.weather)
    setMood(step.mood)
    setLiveWeatherStatus('Manual simulated step is active.')
    setLiveWeatherMode('idle')
    setActiveCapability(null)
  }

  const applyLiveWeather = () => {
    setActiveCapability('live')

    if (!navigator.geolocation) {
      setLiveWeatherStatus('Live weather needs browser location support. Simulated weather remains active.')
      setLiveWeatherMode('error')
      setCapabilityStatus('Live weather could not start because browser location is not available.')
      return
    }

    setIsSimulating(false)
    setLiveWeatherStatus('Requesting local weather...')
    setLiveWeatherMode('loading')
    setCapabilityStatus('Live weather is checking your browser location, then updating Weather only.')

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
          )
          const data = await response.json()
          const weatherCode = Number(data?.current_weather?.weathercode ?? 0)
          setWeather(getWeatherFromCode(weatherCode))
          setLiveWeatherStatus('Live weather applied from Open-Meteo. Season, time, and mood stay editable.')
          setLiveWeatherMode('active')
          setCapabilityStatus('Live weather updated the Weather control. Season, time, and mood remain editable.')
        } catch {
          setLiveWeatherStatus('Live weather could not load. Simulated weather remains active.')
          setLiveWeatherMode('error')
          setCapabilityStatus('Live weather could not load, so the demo stays in simulated/manual mode.')
        }
      },
      () => {
        setLiveWeatherStatus('Location was not available. Simulated weather remains active.')
        setLiveWeatherMode('error')
        setCapabilityStatus('Location was not available, so the demo stays in simulated/manual mode.')
      },
      { timeout: 8000 },
    )
  }

  const previewCapability = (id: CapabilityId) => {
    setActiveCapability(id)

    if (id !== 'cycle' && id !== 'live') {
      setIsSimulating(false)
    }

    if (id !== 'live') {
      setLiveWeatherMode('idle')
    }

    switch (id) {
      case 'spring':
        setSeason('spring')
        setTime('morning')
        setWeather('clear')
        setMood('clarity')
        setCapabilityStatus('Spring tint preview: fresh green colour and morning clarity.')
        break
      case 'evening':
        setSeason('summer')
        setTime('evening')
        setWeather('cloudy')
        setMood('calm')
        setCapabilityStatus('Evening ambience preview: violet light, slower pacing, and softer contrast.')
        break
      case 'rain':
        setWeather('rain')
        setTime('evening')
        setMood('focus')
        setCapabilityStatus('Rain shimmer preview: rain adds motion, shimmer, and a stronger blue glow.')
        break
      case 'winter':
        setSeason('winter')
        setWeather('snow')
        setMood('calm')
        setTime('night')
        setCapabilityStatus('Winter particles preview: snow and cool night light activate the particle layer.')
        break
      case 'calm':
        setMood('calm')
        setWeather('cloudy')
        setCapabilityStatus('Calm mood preview: the surface dims and softens for slower interaction.')
        break
      case 'focus':
        setMood('focus')
        setTime('night')
        setCapabilityStatus('Focus mood preview: contrast increases while the atmosphere stays restrained.')
        break
      case 'cycle':
        setCapabilityStatus('Auto-cycle preview is running: every control changes through simulated time.')
        if (!isSimulating) {
          toggleSimulation()
        }
        break
      case 'live':
        applyLiveWeather()
        break
      case 'lexicon':
        setMood('focus')
        setCapabilityStatus('Mood lexicon preview: the overlay below explains the current emotional behaviour.')
        break
    }
  }

  const currentMood = moodLexicon[mood]
  const controlStatus = isSimulating
    ? 'Auto-cycle is active: season, time of day, weather, and mood are all being changed by simulated time. Manual changes will pause auto-cycle.'
    : liveWeatherMode === 'active'
      ? 'Live weather is active: only the Weather control has been updated from local weather. Season, time of day, and mood remain manual.'
      : liveWeatherMode === 'loading'
        ? 'Live weather is loading: auto-cycle is paused while the browser checks local weather.'
        : liveWeatherMode === 'error'
          ? 'Live weather is unavailable: all controls remain manual and simulated.'
          : 'Manual mode is active: all controls are editable. Auto-cycle will animate every control; live weather only updates Weather.'

  return (
    <StudioPageLayout
      title="Living Atmosphere Demo"
      subtitle="A calm, atmospheric interaction layer in motion."
    >
      <section className="la-demo-page">
        <header className="demo-header">
          <p className="demo-kicker">Living Atmosphere</p>
          <p className="demo-header-line">Simulated weather, mood, and seasonal time are active.</p>
        </header>

        <section className="demo-description">
          <p>
            This page shows Living Atmosphere working inside a digital space. You can explore
            seasonal tinting, time-of-day ambience, weather shimmer, mood behaviour, and cinematic
            transitions.
          </p>
          <p className="demo-feature-punchline">All running instantly!</p>
        </section>

        <section
          id="demo-surface"
          className={`weather-${weather} season-${season} mood-${mood} ${isSimulating ? 'is-simulating' : ''}`}
          style={demoStyle}
        >
          <div className="seasonal-particles" aria-hidden="true" />
          <div className="weather-system" aria-hidden="true" />
          <div className="demo-surface-vignette" aria-hidden="true" />
          <div className="demo-surface-copy">
            <p className="demo-text">
              {season} / {time} / {weather} / {mood}
            </p>
            <span>{seasonPalettes[season].label}</span>
            <span>{timePalettes[time].label}</span>
            <span>{weatherPalettes[weather].label}</span>
          </div>
        </section>

        <section className="simulation-rail" aria-label="Simulation timeline">
          {simulationSteps.map((step, index) => (
            <button
              key={`${step.season}-${step.time}-${step.weather}-${step.mood}`}
              type="button"
              className={`simulation-dot ${index === stepIndex ? 'is-active' : ''}`}
              onClick={() => jumpToStep(index)}
              aria-label={`Show ${step.season} ${step.time} ${step.weather} ${step.mood}`}
            />
          ))}
        </section>

        <section className="demo-controls" aria-label="Living Atmosphere controls">
          <h2>Controls</h2>

          <div className="control-group">
            <label htmlFor="season">Season</label>
            <select id="season" value={season} onChange={(event) => pauseAndSet(setSeason, event.target.value as Season)}>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="autumn">Autumn</option>
              <option value="winter">Winter</option>
            </select>
          </div>

          <div className="control-group">
            <label htmlFor="time">Time of Day</label>
            <select id="time" value={time} onChange={(event) => pauseAndSet(setTime, event.target.value as TimeOfDay)}>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="night">Night</option>
            </select>
          </div>

          <div className="control-group">
            <label htmlFor="weather">Weather</label>
            <select id="weather" value={weather} onChange={(event) => pauseAndSet(setWeather, event.target.value as Weather)}>
              <option value="clear">Clear</option>
              <option value="cloudy">Cloudy</option>
              <option value="rain">Rain</option>
              <option value="snow">Snow</option>
            </select>
          </div>

          <div className="control-group">
            <label htmlFor="mood">Mood</label>
            <select id="mood" value={mood} onChange={(event) => pauseAndSet(setMood, event.target.value as Mood)}>
              <option value="grounding">Grounding</option>
              <option value="clarity">Clarity</option>
              <option value="uplift">Uplift</option>
              <option value="calm">Calm</option>
              <option value="focus">Focus</option>
            </select>
          </div>

          <button
            id="autoCycle"
            type="button"
            className={isSimulating ? 'is-active' : ''}
            aria-pressed={isSimulating}
            onClick={toggleSimulation}
          >
            {isSimulating ? 'Auto-Cycle Active' : 'Start Auto-Cycle'}
          </button>
          <button
            type="button"
            className={`live-weather-button is-${liveWeatherMode}`}
            aria-pressed={liveWeatherMode === 'active'}
            aria-busy={liveWeatherMode === 'loading'}
            onClick={applyLiveWeather}
          >
            {liveWeatherMode === 'loading'
              ? 'Loading Weather'
              : liveWeatherMode === 'active'
                ? 'Live Weather Active'
                : liveWeatherMode === 'error'
                  ? 'Live Weather Unavailable'
                  : 'Use Live Weather'}
          </button>

          <div className="demo-control-status" role="status" aria-live="polite">
            <p>{controlStatus}</p>
            <ul>
              <li><strong>Manual controls:</strong> all four controls are editable.</li>
              <li><strong>Auto-cycle:</strong> changes season, time, weather, and mood until paused.</li>
              <li><strong>Live weather:</strong> updates weather only; the other controls stay active.</li>
            </ul>
          </div>
        </section>

        <section className="demo-explanation-panel" aria-label="How this demo works">
          <h2>Feature previews</h2>
          <p>
            Use these previews to see individual atmosphere behaviours without scrolling back to the
            main scene. Each button changes the compact preview here and the cinematic surface above.
          </p>
          <div className="capability-preview-status" role="status" aria-live="polite">
            {capabilityStatus}
          </div>
          <div
            className={`capability-mini-preview weather-${weather} season-${season} mood-${mood} ${isSimulating ? 'is-simulating' : ''}`}
            style={demoStyle}
            aria-label="Feature preview"
          >
            <div className="seasonal-particles" aria-hidden="true" />
            <div className="weather-system" aria-hidden="true" />
            <div className="demo-surface-vignette" aria-hidden="true" />
            <p>{activeCapability ? demoCapabilities.find((capability) => capability.id === activeCapability)?.label : 'Feature preview'}</p>
            <span>{season} / {time} / {weather} / {mood}</span>
          </div>
          <ul className="capability-grid">
            {demoCapabilities.map((capability) => (
              <li key={capability.id}>
                <button
                  type="button"
                  className={activeCapability === capability.id ? 'is-active' : ''}
                  onClick={() => previewCapability(capability.id)}
                >
                  <span>{capability.label}</span>
                  <small>{capability.hint}</small>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="mood-lexicon-overlay" aria-label="Mood lexicon">
          <div>
            <p className="demo-kicker">Mood lexicon</p>
            <h2>{currentMood.label}</h2>
            <p>{currentMood.note}</p>
          </div>
          <dl>
            <div>
              <dt>Season</dt>
              <dd>{seasonPalettes[season].label}</dd>
            </div>
            <div>
              <dt>Time</dt>
              <dd>{timePalettes[time].label}</dd>
            </div>
            <div>
              <dt>Weather</dt>
              <dd>{weatherPalettes[weather].label}</dd>
            </div>
          </dl>
        </section>

        <section className="demo-live-weather" aria-label="Weather API integration">
          <h2>Weather API Integration</h2>
          <p>{liveWeatherStatus}</p>
          <p>
            Live weather maps local browser weather into the Weather control only. It does not lock
            season, time of day, or mood.
          </p>
          <p className="demo-implementation-note">
            Prototype note: this demo reads live weather directly from Open-Meteo. The existing
            /api/weather route can be connected later as the production weather layer.
          </p>
        </section>

        <section className="demo-cta">
          <Link to="/studio/licencing">View licencing</Link>
          <Link to="/studio/work-with-me#studio-contact-form">Contact the studio</Link>
        </section>
      </section>
    </StudioPageLayout>
  )
}
