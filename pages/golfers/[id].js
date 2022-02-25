import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import useUserScores from '../../lib/useUserScores.js'
import ScoreCard from '../../components/ScoreCard'
import useUser from '../../lib/useUser'

export default function Golfer() {
  const router = useRouter()
  const userId = router.query.id
  const { scores, error } = useUserScores(userId)
  const { user, errorr } = useUser(userId)
  return (
    <Layout>
      {error ? (
        <>
          <p>User not found</p>
        </>
      ) : (
        <>
          <p className="tracking-widest">{user ? user.name : ''}</p>
          {scores && user &&
            scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={userId}
                userName={user.name}
                gotoGolfer={false}
              />
            ))}{' '}
        </>
      )}
    </Layout>
  )
}
