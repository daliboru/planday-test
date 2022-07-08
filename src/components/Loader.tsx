export default function Loader() {
  return (
    <div className="loader__container">
      <div className="window">
        <div className="window-body">
          <div className="c-loader is--started">
            <div className="c-loader__title">
              <div className="c-loader__state c-loader__state--progress">
                Now Loading <span className="c-loader__dots">...</span>
              </div>
              <div className="c-loader__state c-loader__state--complete">
                Complete
              </div>
            </div>
            <div className="c-loader__holder">
              <span className="c-loader__progress" />
              <span className="c-loader__progress-helper c-loader__progress-helper--left" />
              <span className="c-loader__progress-helper c-loader__progress-helper--right" />
              <svg
                className="c-loader__svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 237 22"
              >
                <path
                  d="M235.4 8.5h-1.6V5h-4V1H5.8v4h-3v3.5h-2v6h2V17h3v4h224v-4h4v-2.5h1.6v-6zm-3.6 6.5h-4v4H7.8v-4h-3V7h3V3h220v4h4v8z"
                  id="Layer_7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
