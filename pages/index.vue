<template>
  <main class="Container">
    <Cover img="https://as1.ftcdn.net/v2/jpg/03/45/18/76/1000_F_345187680_Eo4rKPDmdB6QTaGXFwU4NE5BaLlpGooL.jpg" />
    <div class="Articles">
      <Dropdown :items="categories" />
      <div class="Inner">
        <article class="Article">
          <NuxtLink to="/blog/article/" class="Article_Link">
            <div class="Article_Eyecatch">
              <img src="/blog01.jpg" alt="" width="1076" height="664" />
            </div>
            <div class="Article_Inner">
              <h2 class="Article_Title">ハイブリッドな働き方に合わせた採用の方法 - Fictitious最新アップデート</h2>
              <div class="Article_Content">
                <div class="Article_Data">
                  <div class="Article_Avatar">
                    <img src="/member01.jpg" alt="" width="32" height="32" />
                  </div>
                  <div class="Article_DataText">
                    <div class="Article_AuthorName">Donna Thomason</div>
                    <time datetime="2021-09-12" class="Article_Date">2021/09/12</time>
                  </div>
                </div>
                <div class="Article_Fav">
                  <svg width="15" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.803125.2C9.53075.2 8.3095625.7959128 7.5125 1.73760218 6.7154375.79591281 5.49425.2 4.221875.2 1.969625.2.2 1.98038147.2 4.24632153c0 2.78092643 2.48625 5.04686648 6.2521875 8.48991827L7.5125 13.7l1.0603125-.9711172C12.33875 9.29318801 14.825 7.02724796 14.825 4.24632153 14.825 1.98038147 13.055375.2 10.803125.2zm-3.2175 11.4400545l-.073125.0735695-.073125-.0735695C3.958625 8.46920981 1.6625 6.37247956 1.6625 4.24632153c0-1.47138965 1.096875-2.57493188 2.559375-2.57493188 1.126125 0 2.223.72833787 2.6105625 1.73623978H8.199875c.38025-1.00790191 1.477125-1.73623978 2.60325-1.73623978 1.4625 0 2.559375 1.10354223 2.559375 2.57493188 0 2.12615803-2.296125 4.22288828-5.776875 7.39373297z" fill="#888" fill-rule="nonzero"/></svg>
                  <em>12</em>
                </div>
              </div>
            </div>
          </NuxtLink>
        </article>
        <article class="Article">
          <NuxtLink to="/blog/article/" class="Article_Link">
            <div class="Article_Eyecatch">
              <img src="/blog02.jpg" alt="" width="1076" height="664" />
            </div>
            <div class="Article_Inner">
              <h2 class="Article_Title">Fictitiousで採用管理を素早く開始する</h2>
              <div class="Article_Content">
                <div class="Article_Data">
                  <div class="Article_Avatar">
                    <img src="/member02.jpg" alt="" width="32" height="32" />
                  </div>
                  <div class="Article_DataText">
                    <div class="Article_AuthorName">Joann Dingus</div>
                    <time datetime="2021-09-12" class="Article_Date">2021/09/12</time>
                  </div>
                </div>
                <div class="Article_Fav">
                  <svg width="15" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.803125.2C9.53075.2 8.3095625.7959128 7.5125 1.73760218 6.7154375.79591281 5.49425.2 4.221875.2 1.969625.2.2 1.98038147.2 4.24632153c0 2.78092643 2.48625 5.04686648 6.2521875 8.48991827L7.5125 13.7l1.0603125-.9711172C12.33875 9.29318801 14.825 7.02724796 14.825 4.24632153 14.825 1.98038147 13.055375.2 10.803125.2zm-3.2175 11.4400545l-.073125.0735695-.073125-.0735695C3.958625 8.46920981 1.6625 6.37247956 1.6625 4.24632153c0-1.47138965 1.096875-2.57493188 2.559375-2.57493188 1.126125 0 2.223.72833787 2.6105625 1.73623978H8.199875c.38025-1.00790191 1.477125-1.73623978 2.60325-1.73623978 1.4625 0 2.559375 1.10354223 2.559375 2.57493188 0 2.12615803-2.296125 4.22288828-5.776875 7.39373297z" fill="#888" fill-rule="nonzero"/></svg>
                  <em>12</em>
                </div>
              </div>
            </div>
          </NuxtLink>
        </article>
        <article class="Article">
          <NuxtLink to="/blog/article/" class="Article_Link">
            <div class="Article_Eyecatch">
              <img src="/blog03.jpg" alt="" width="1076" height="664" />
            </div>
            <div class="Article_Inner">
              <h2 class="Article_Title">リーダーへのアドバイス。もう一度オフィスをうまく使う5つの方法</h2>
              <div class="Article_Content">
                <div class="Article_Data">
                  <div class="Article_Avatar">
                    <img src="/member08.jpg" alt="" width="32" height="32" />
                  </div>
                  <div class="Article_DataText">
                    <div class="Article_AuthorName">George Allen</div>
                    <time datetime="2021-09-12" class="Article_Date">2021/09/12</time>
                  </div>
                </div>
                <div class="Article_Fav">
                  <svg width="15" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.803125.2C9.53075.2 8.3095625.7959128 7.5125 1.73760218 6.7154375.79591281 5.49425.2 4.221875.2 1.969625.2.2 1.98038147.2 4.24632153c0 2.78092643 2.48625 5.04686648 6.2521875 8.48991827L7.5125 13.7l1.0603125-.9711172C12.33875 9.29318801 14.825 7.02724796 14.825 4.24632153 14.825 1.98038147 13.055375.2 10.803125.2zm-3.2175 11.4400545l-.073125.0735695-.073125-.0735695C3.958625 8.46920981 1.6625 6.37247956 1.6625 4.24632153c0-1.47138965 1.096875-2.57493188 2.559375-2.57493188 1.126125 0 2.223.72833787 2.6105625 1.73623978H8.199875c.38025-1.00790191 1.477125-1.73623978 2.60325-1.73623978 1.4625 0 2.559375 1.10354223 2.559375 2.57493188 0 2.12615803-2.296125 4.22288828-5.776875 7.39373297z" fill="#888" fill-rule="nonzero"/></svg>
                  <em>12</em>
                </div>
              </div>
            </div>
          </NuxtLink>
        </article>
        <article class="Article">
          <NuxtLink to="/blog/article/" class="Article_Link">
            <div class="Article_Eyecatch">
              <img src="/blog04.jpg" alt="" width="1076" height="664" />
            </div>
            <div class="Article_Inner">
              <h2 class="Article_Title">Fictitiousを活用して、世界を広げましょう</h2>
              <div class="Article_Content">
                <div class="Article_Data">
                  <div class="Article_Avatar">
                    <img src="/member02.jpg" alt="" width="32" height="32" />
                  </div>
                  <div class="Article_DataText">
                    <div class="Article_AuthorName">Joann Dingus</div>
                    <time datetime="2021-09-12" class="Article_Date">2021/09/12</time>
                  </div>
                </div>
                <div class="Article_Fav">
                  <svg width="15" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.803125.2C9.53075.2 8.3095625.7959128 7.5125 1.73760218 6.7154375.79591281 5.49425.2 4.221875.2 1.969625.2.2 1.98038147.2 4.24632153c0 2.78092643 2.48625 5.04686648 6.2521875 8.48991827L7.5125 13.7l1.0603125-.9711172C12.33875 9.29318801 14.825 7.02724796 14.825 4.24632153 14.825 1.98038147 13.055375.2 10.803125.2zm-3.2175 11.4400545l-.073125.0735695-.073125-.0735695C3.958625 8.46920981 1.6625 6.37247956 1.6625 4.24632153c0-1.47138965 1.096875-2.57493188 2.559375-2.57493188 1.126125 0 2.223.72833787 2.6105625 1.73623978H8.199875c.38025-1.00790191 1.477125-1.73623978 2.60325-1.73623978 1.4625 0 2.559375 1.10354223 2.559375 2.57493188 0 2.12615803-2.296125 4.22288828-5.776875 7.39373297z" fill="#888" fill-rule="nonzero"/></svg>
                  <em>12</em>
                </div>
              </div>
            </div>
          </NuxtLink>
        </article>
        <article class="Article">
          <NuxtLink to="/blog/article/" class="Article_Link">
            <div class="Article_Eyecatch">
              <img src="/blog05.jpg" alt="" width="1076" height="664" />
            </div>
            <div class="Article_Inner">
              <h2 class="Article_Title">Fictitiousでコラボレーションを次のレベルに引き上げる</h2>
              <div class="Article_Content">
                <div class="Article_Data">
                  <div class="Article_Avatar">
                    <img src="/member08.jpg" alt="" width="32" height="32" />
                  </div>
                  <div class="Article_DataText">
                    <div class="Article_AuthorName">George Allen</div>
                    <time datetime="2021-09-12" class="Article_Date">2021/09/12</time>
                  </div>
                </div>
                <div class="Article_Fav">
                  <svg width="15" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.803125.2C9.53075.2 8.3095625.7959128 7.5125 1.73760218 6.7154375.79591281 5.49425.2 4.221875.2 1.969625.2.2 1.98038147.2 4.24632153c0 2.78092643 2.48625 5.04686648 6.2521875 8.48991827L7.5125 13.7l1.0603125-.9711172C12.33875 9.29318801 14.825 7.02724796 14.825 4.24632153 14.825 1.98038147 13.055375.2 10.803125.2zm-3.2175 11.4400545l-.073125.0735695-.073125-.0735695C3.958625 8.46920981 1.6625 6.37247956 1.6625 4.24632153c0-1.47138965 1.096875-2.57493188 2.559375-2.57493188 1.126125 0 2.223.72833787 2.6105625 1.73623978H8.199875c.38025-1.00790191 1.477125-1.73623978 2.60325-1.73623978 1.4625 0 2.559375 1.10354223 2.559375 2.57493188 0 2.12615803-2.296125 4.22288828-5.776875 7.39373297z" fill="#888" fill-rule="nonzero"/></svg>
                  <em>12</em>
                </div>
              </div>
            </div>
          </NuxtLink>
        </article>
        <article class="Article">
          <NuxtLink to="/blog/article/" class="Article_Link">
            <div class="Article_Eyecatch">
              <img src="/blog06.jpg" alt="" width="1076" height="664" />
            </div>
            <div class="Article_Inner">
              <h2 class="Article_Title">ハイクラスの人材採用について知っておくべきことすべて</h2>
              <div class="Article_Content">
                <div class="Article_Data">
                  <div class="Article_Avatar">
                    <img src="/member01.jpg" alt="" width="32" height="32" />
                  </div>
                  <div class="Article_DataText">
                    <div class="Article_AuthorName">Donna Thomason</div>
                    <time datetime="2021-09-12" class="Article_Date">2021/09/12</time>
                  </div>
                </div>
                <div class="Article_Fav">
                  <svg width="15" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.803125.2C9.53075.2 8.3095625.7959128 7.5125 1.73760218 6.7154375.79591281 5.49425.2 4.221875.2 1.969625.2.2 1.98038147.2 4.24632153c0 2.78092643 2.48625 5.04686648 6.2521875 8.48991827L7.5125 13.7l1.0603125-.9711172C12.33875 9.29318801 14.825 7.02724796 14.825 4.24632153 14.825 1.98038147 13.055375.2 10.803125.2zm-3.2175 11.4400545l-.073125.0735695-.073125-.0735695C3.958625 8.46920981 1.6625 6.37247956 1.6625 4.24632153c0-1.47138965 1.096875-2.57493188 2.559375-2.57493188 1.126125 0 2.223.72833787 2.6105625 1.73623978H8.199875c.38025-1.00790191 1.477125-1.73623978 2.60325-1.73623978 1.4625 0 2.559375 1.10354223 2.559375 2.57493188 0 2.12615803-2.296125 4.22288828-5.776875 7.39373297z" fill="#888" fill-rule="nonzero"/></svg>
                  <em>12</em>
                </div>
              </div>
            </div>
          </NuxtLink>
        </article>
        <article class="Article">
          <NuxtLink to="/blog/article/" class="Article_Link">
            <div class="Article_Eyecatch">
              <img src="/blog07.jpg" alt="" width="1076" height="664" />
            </div>
            <div class="Article_Inner">
              <h2 class="Article_Title">ランチのケータリングで業績がV字回復？</h2>
              <div class="Article_Content">
                <div class="Article_Data">
                  <div class="Article_Avatar">
                    <img src="/member02.jpg" alt="" width="32" height="32" />
                  </div>
                  <div class="Article_DataText">
                    <div class="Article_AuthorName">Joann Dingus</div>
                    <time datetime="2021-09-12" class="Article_Date">2021/09/12</time>
                  </div>
                </div>
                <div class="Article_Fav">
                  <svg width="15" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.803125.2C9.53075.2 8.3095625.7959128 7.5125 1.73760218 6.7154375.79591281 5.49425.2 4.221875.2 1.969625.2.2 1.98038147.2 4.24632153c0 2.78092643 2.48625 5.04686648 6.2521875 8.48991827L7.5125 13.7l1.0603125-.9711172C12.33875 9.29318801 14.825 7.02724796 14.825 4.24632153 14.825 1.98038147 13.055375.2 10.803125.2zm-3.2175 11.4400545l-.073125.0735695-.073125-.0735695C3.958625 8.46920981 1.6625 6.37247956 1.6625 4.24632153c0-1.47138965 1.096875-2.57493188 2.559375-2.57493188 1.126125 0 2.223.72833787 2.6105625 1.73623978H8.199875c.38025-1.00790191 1.477125-1.73623978 2.60325-1.73623978 1.4625 0 2.559375 1.10354223 2.559375 2.57493188 0 2.12615803-2.296125 4.22288828-5.776875 7.39373297z" fill="#888" fill-rule="nonzero"/></svg>
                  <em>12</em>
                </div>
              </div>
            </div>
          </NuxtLink>
        </article>
        <article class="Article">
          <NuxtLink to="/blog/article/" class="Article_Link">
            <div class="Article_Eyecatch">
              <img src="/blog08.jpg" alt="" width="1076" height="664" />
            </div>
            <div class="Article_Inner">
              <h2 class="Article_Title">ポストコロナの世界で採用イベントはどう変化しているか？</h2>
              <div class="Article_Content">
                <div class="Article_Data">
                  <div class="Article_Avatar">
                    <img src="/member08.jpg" alt="" width="32" height="32" />
                  </div>
                  <div class="Article_DataText">
                    <div class="Article_AuthorName">George Allen</div>
                    <time datetime="2021-09-12" class="Article_Date">2021/09/12</time>
                  </div>
                </div>
                <div class="Article_Fav">
                  <svg width="15" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.803125.2C9.53075.2 8.3095625.7959128 7.5125 1.73760218 6.7154375.79591281 5.49425.2 4.221875.2 1.969625.2.2 1.98038147.2 4.24632153c0 2.78092643 2.48625 5.04686648 6.2521875 8.48991827L7.5125 13.7l1.0603125-.9711172C12.33875 9.29318801 14.825 7.02724796 14.825 4.24632153 14.825 1.98038147 13.055375.2 10.803125.2zm-3.2175 11.4400545l-.073125.0735695-.073125-.0735695C3.958625 8.46920981 1.6625 6.37247956 1.6625 4.24632153c0-1.47138965 1.096875-2.57493188 2.559375-2.57493188 1.126125 0 2.223.72833787 2.6105625 1.73623978H8.199875c.38025-1.00790191 1.477125-1.73623978 2.60325-1.73623978 1.4625 0 2.559375 1.10354223 2.559375 2.57493188 0 2.12615803-2.296125 4.22288828-5.776875 7.39373297z" fill="#888" fill-rule="nonzero"/></svg>
                  <em>12</em>
                </div>
              </div>
            </div>
          </NuxtLink>
        </article>
        <article class="Article">
          <NuxtLink to="/blog/article/" class="Article_Link">
            <div class="Article_Eyecatch">
              <img src="/blog09.jpg" alt="" width="1076" height="664" />
            </div>
            <div class="Article_Inner">
              <h2 class="Article_Title">人材獲得の競争に勝つ方法を思考してみる</h2>
              <div class="Article_Content">
                <div class="Article_Data">
                  <div class="Article_Avatar">
                    <img src="/member01.jpg" alt="" width="32" height="32" />
                  </div>
                  <div class="Article_DataText">
                    <div class="Article_AuthorName">Donna Thomason</div>
                    <time datetime="2021-09-12" class="Article_Date">2021/09/12</time>
                  </div>
                </div>
                <div class="Article_Fav">
                  <svg width="15" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.803125.2C9.53075.2 8.3095625.7959128 7.5125 1.73760218 6.7154375.79591281 5.49425.2 4.221875.2 1.969625.2.2 1.98038147.2 4.24632153c0 2.78092643 2.48625 5.04686648 6.2521875 8.48991827L7.5125 13.7l1.0603125-.9711172C12.33875 9.29318801 14.825 7.02724796 14.825 4.24632153 14.825 1.98038147 13.055375.2 10.803125.2zm-3.2175 11.4400545l-.073125.0735695-.073125-.0735695C3.958625 8.46920981 1.6625 6.37247956 1.6625 4.24632153c0-1.47138965 1.096875-2.57493188 2.559375-2.57493188 1.126125 0 2.223.72833787 2.6105625 1.73623978H8.199875c.38025-1.00790191 1.477125-1.73623978 2.60325-1.73623978 1.4625 0 2.559375 1.10354223 2.559375 2.57493188 0 2.12615803-2.296125 4.22288828-5.776875 7.39373297z" fill="#888" fill-rule="nonzero"/></svg>
                  <em>12</em>
                </div>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
      <Pagination />
    </div>
  </main>
</template>

<script>
export default {
  layout: 'blog',
  data() {
    return {
      categories: [
        { label: 'All posts' },
        { label: 'Category01' },
        { label: 'Category02' },
        { label: 'Category03' }
      ]      
    }
  }
}
</script>

<style scoped>
.Articles {
  padding: 24px 24px 40px 24px;
  margin: 0 auto;
}
.Inner {
  display: flex;
  flex-wrap: wrap;
}
.Article {
  border: 1px solid #e5e5e5;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.05);
  border-radius: 4px;
  margin: 0 0 16px 0;
  width: 100%;
}
.Article_Link {
  display: flex;
  padding: 0;
  line-height: 1.5;
  color: #333;
  text-decoration: none;
  border-radius: 3px;
  transition: background .2s;
  background: #fff;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
.Article_Link:hover {
  background: #f8f8f8;
}
.Article_Link:active {
  background: none;
  transition: none;
}
.Article_Eyecatch {
  width: 100%;
  position: relative;
}
.Article_Eyecatch::before {
  content: "";
  padding-top: 54%;
  display: block;
}
.Article_EyecatchInner {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.Article_Eyecatch > img {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;
  font-family: 'object-fit: cover'; /* IE11 */
  width: 100%;
  height: 100%;
}
.Article_Inner {
  padding: 16px;
  flex: 1 auto;
  display: flex;
  flex-direction: column;
}
.Article_Title {
  font-size: 1.4rem;
  margin: 0 0 12px 0;
  padding: 0;
}
.Article_Content {
  margin: auto 0 0 0;
  display: flex;
  align-items: center;
}
.Article_Data {
  display: flex;
  align-items: center;
}
.Article_Avatar {
  width: 32px;
  height: 32px;
  border-radius: 16px;
  overflow: hidden;
  margin: 0 12px 0 0;
  flex-shrink: 0;
}
.Article_Avatar img {
  width: 32px;
  height: 32px;
  object-fit: cover;
  font-family: 'object-fit: cover'; /* IE11 */
}
.Article_AuthorName {
  font-size: 1.2rem;
  font-weight: bold;
}
.Article_Date {
  font-size: 1.2rem;
  color: #888;
}
.Article_Fav {
  margin: 0 8px 0 auto;
  display: flex;
  align-items: center;
}
.Article_Fav > em {
  font-size: 1.2rem;
  font-style: normal;
  margin: 0 0 0 4px;
  color: #888;
}
@media (min-width: 600px) {
  .Articles {
    padding: 60px;
  }
  .Article {
    margin: 0 12px 24px 0;
    width: calc(50% - 14px);
  }
  .Article:nth-child(2n) {
    margin: 0 0 24px auto;
  }
}
@media (min-width: 960px) {
  .Articles {
    max-width: 1024px;
  }
  .Article {
    margin: 0 24px 24px 0;
    width: calc(33.333% - 18px);
  }
  .Article:nth-child(2n) {
    margin: 0 24px 24px 0;
  }
  .Article:nth-child(3n) {
    margin: 0 0 24px 0;
  }
}
</style>