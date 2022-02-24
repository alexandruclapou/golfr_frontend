import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import useUserScores from '../../lib/useUserScores.js'
import ScoreCard from '../../components/ScoreCard'

export default function Golfer() {
  const router = useRouter()
  const userId = router.query.id
  const { userScores, error } = useUserScores(userId)
  const name = userScores ? userScores.user.name : ''
  const scores = userScores ? userScores.user_scores : []
  return (
    <Layout>
      {error ? (
        <>
          <p>User not found</p>
        </>
      ) : (
        <>
          <p className="tracking-widest">{name}</p>
          {scores &&
            scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={userId}
                userName={name}
                gotoGolfer={false}
              />
            ))}{' '}
        </>
      )}
    </Layout>
  )
}
