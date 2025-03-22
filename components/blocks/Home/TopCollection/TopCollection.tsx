import './topCollection.scss';
import nft1 from '@/assets/images/blocks/hero/nft-1.png';
import ethereum from '@/assets/icons/ethereum.svg';
import Image from 'next/image';

const TopCollection = () => {
  return (
    <section className="top-collection">
      <div className="container">
        <h2>Top Collection</h2>
        <table className="top-collection__table">
          <thead className="top-collection__tableHeader">
            <tr className="top-collection__tableRow">
              <th className="top-collection__tableHeaderCell">Collection</th>
              <th className="top-collection__tableHeaderCell">Volume</th>
              <th className="top-collection__tableHeaderCell">24h %</th>
              <th className="top-collection__tableHeaderCell">Floor Price</th>
              <th className="top-collection__tableHeaderCell">Owners</th>
              <th className="top-collection__tableHeaderCell">Items</th>
            </tr>
          </thead>
          <tbody>
            <tr className="top-collection__tableRow">
              <td>
                <div className="top-collection__collectionBlock">
                  <Image src={nft1} alt="nft" />
                  <div className="top-collection__collectionBLockText">
                    <div className="top-collection__collectionUser">
                      Alex Ca.
                    </div>
                    <div className="top-collection__collectionByUser">
                      By Alex Ca.
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="top-collection__tdContainer">
                  <div className="top-collection__collectionPrice">
                    <Image src={ethereum} alt="ethereum" />
                    8,456
                  </div>
                  <div className="top-collection__plus">+ 27.78%</div>
                </div>
              </td>
              <td className="top-collection__plus">+ 27.78%</td>
              <td>
                <div className="top-collection__collectionPrice">
                  <Image src={ethereum} alt="ethereum" />
                  3,5
                </div>
              </td>
              <td>2.2K</td>
              <td>500</td>
            </tr>
            <tr className="top-collection__tableRow">
              <td>
                <div className="top-collection__collectionBlock">
                  <Image src={nft1} alt="nft" />
                  <div className="top-collection__collectionBLockText">
                    <div className="top-collection__collectionUser">
                      Alex Ca.
                    </div>
                    <div className="top-collection__collectionByUser">
                      By Alex Ca.
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="top-collection__tdContainer">
                  <div className="top-collection__collectionPrice">
                    <Image src={ethereum} alt="ethereum" />
                    8,456
                  </div>
                  <div className="top-collection__plus">+ 27.78%</div>
                </div>
              </td>
              <td className="top-collection__plus">+ 27.78%</td>
              <td>
                <div className="top-collection__collectionPrice">
                  <Image src={ethereum} alt="ethereum" />
                  3,5
                </div>
              </td>
              <td>2.2K</td>
              <td>500</td>
            </tr>
            <tr className="top-collection__tableRow">
              <td>
                <div className="top-collection__collectionBlock">
                  <Image src={nft1} alt="nft" />
                  <div className="top-collection__collectionBLockText">
                    <div className="top-collection__collectionUser">
                      Alex Ca.
                    </div>
                    <div className="top-collection__collectionByUser">
                      By Alex Ca.
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="top-collection__tdContainer">
                  <div className="top-collection__collectionPrice">
                    <Image src={ethereum} alt="ethereum" />
                    8,456
                  </div>
                  <div className="top-collection__plus">+ 27.78%</div>
                </div>
              </td>
              <td className="top-collection__plus">+ 27.78%</td>
              <td>
                <div className="top-collection__collectionPrice">
                  <Image src={ethereum} alt="ethereum" />
                  3,5
                </div>
              </td>
              <td>2.2K</td>
              <td>500</td>
            </tr>
            <tr className="top-collection__tableRow">
              <td>
                <div className="top-collection__collectionBlock">
                  <Image src={nft1} alt="nft" />
                  <div className="top-collection__collectionBLockText">
                    <div className="top-collection__collectionUser">
                      Alex Ca.
                    </div>
                    <div className="top-collection__collectionByUser">
                      By Alex Ca.
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="top-collection__tdContainer">
                  <div className="top-collection__collectionPrice">
                    <Image src={ethereum} alt="ethereum" />
                    8,456
                  </div>
                  <div className="top-collection__plus">+ 27.78%</div>
                </div>
              </td>
              <td className="top-collection__plus">+ 27.78%</td>
              <td>
                <div className="top-collection__collectionPrice">
                  <Image src={ethereum} alt="ethereum" />
                  3,5
                </div>
              </td>
              <td>2.2K</td>
              <td>500</td>
            </tr>
          </tbody>
        </table>

        <a href="#a">
          Explore All
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.82129 8.35059H15.7861"
              stroke="#ACADB9"
              strokeWidth="1.99471"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.80176 1.36621L15.7841 8.34859L8.80176 15.331"
              stroke="#ACADB9"
              strokeWidth="1.99471"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default TopCollection;
