import PropTypes from 'prop-types'
import useScoreDelete from '../lib/useScoreDelete'
import { getUserId } from '../lib/userAuth'
import Link from 'next/link'

const CONFIRM_MESSAGE = 'Are you sure you want to delete the score?'

const ScoreCard = ({ id, playedAt, totalScore, userId, userName, gotoGolfer }) => {
  const { deleteScore } = useScoreDelete(id)

  return (
    <div className="flex flex-row p-3 my-4 shadow-md lg:w-1/3 md:w-1/2">
      {/* in case we are on the main page click on the score to go to golfer s page */}
      {gotoGolfer ? (
        <div className="w-5/6">
          <Link href={`/golfers/${userId}`}>
            <a>
              <div className="italic text-gray-400">{playedAt}</div>
              <div>{`${userName} posted a score of ${totalScore}`}</div>
            </a>
          </Link>
        </div>
      ) : (
        <div className="w-5/6">
          <div className="italic text-gray-400">{playedAt}</div>
          <div>{`${userName} posted a score of ${totalScore}`}</div>
        </div>
      )}

      <div className="w-1/6">
        <div className="flex items-center justify-center h-full w-full">
          {getUserId().toString() === userId.toString() && (
            <span
              className="cursor-pointer"
              onClick={() => confirm(CONFIRM_MESSAGE) && deleteScore()}
            >
              ❌
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ScoreCard
