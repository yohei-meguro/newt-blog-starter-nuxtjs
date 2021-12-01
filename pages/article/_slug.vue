<template>
  <main class="Container">
    <article class="Article">
      <div class="Article_Header">
        <h1 class="Article_Title">ハイブリッドな働き方に合わせた採用の方法 - Fictitious最新アップデート</h1>
        <div class="Article_Data">
          <div class="Article_Avatar">
            <img src="/member01.jpg" alt="" width="32" height="32" />
          </div>
          <div class="Article_AuthorName">Donna Thomason</div>
          <time datetime="2021-09-12" class="Article_Date">2021/09/12</time>
        </div>
      </div>
      <div class="Article_Body">
        <p>【書き直し必要】チーム・コラボレーションと生産性向上を支援するソフトウェア企業のアトラシアン（NASDAQ: TEAM）は、アトラシアン製品のみならず、サードパーティー製品も含めて開発のアイデアから運用までの進捗を視覚化し、DevOpsの効果測定を支援するJira Software Cloudの新機能を発表しましたことをお知らせいたします。</p>
        <img src="/blog01.jpg" alt="" width="1076" height="664" />
        <p>DevOpsプラクティスが、チームがより早くサービスを提供することや、より良いコードを提供するために役立っているかどうかを理解することは、そのプラクティスが最終的に企業のビジネスに利益をもたらしているかを知る上で重要なことです。アトラシアンが実施した『2020 DevOpsトレンド調査』によると、多くのチームがDevOpsの実践を通してポジティブな影響があったと回答しているものの、組織のプロセスをどのように測定し、改善すべきか分かっていないチームが大半を占めていることが分かりました。企業はたくさんのデータを保持しているものの、ビジネスへ貢献できる知見、つまりインサイトを得ることに苦戦を強いられています。</p>
        <p>チーム・コラボレーションと生産性向上を支援するソフトウェア企業のアトラシアン（NASDAQ: TEAM）は、アトラシアン製品のみならず、サードパーティー製品も含めて開発のアイデアから運用までの進捗を視覚化し、DevOpsの効果測定を支援するJira Software Cloudの新機能を発表しましたことをお知らせいたします。</p>
      </div>
      <div class="Article_Info">
        <time datetime="2021-09-12" class="Article_InfoDate">2021/09/12</time>
      </div>
      <aside class="Author">
        <div class="Author_Avatar">
          <img src="/member01.jpg" alt="" width="48" height="48" />
        </div>
        <div class="Author_Text">
          <div class="Author_Name">Donna Thomason</div>
          <p class="Author_Description">DonnaはCEOとしてFictitious社の戦略を担っています。以前はPetlassianのマーケティング責任者として、グローバル・マーケティングを担当し、オンライン販売モデルの構築・拡大に貢献しました。また、Netdesk社の取締役を務めています。</p>
        </div>
      </aside>
    </article>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.Article {
  padding: 24px;
  margin: 0 auto;
}
.Article_Header {
  margin: 0 0 24px 0;  
}
.Article_Title {
  font-size: 2.4rem;
  line-height: 1.5;
  font-weight: bold;
  margin: 0 0 16px 0;
  padding: 0;
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
  font-weight: bold;
  margin: 0 8px 0 0;
}
.Article_Date {
  color: #888;
}
.Article_Body >>> p {
  margin: 0 0 24px 0;
}
.Article_Body >>> img {
  max-width: 100%;
  height: auto;
  margin: 32px auto;
  display: block;
}
.Article_Info {
  display: flex;
  align-items: center;
  margin: 40px 0;
}
.Article_InfoDate {
  margin: 0 0 0 auto;
  color: #888;
}
.Fav {
  display: flex;
  align-items: center;
}
.Fav_Button {
  border: none;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.06), 0 3px 10px -8px rgba(0,0,0,1);
  position: relative;
  cursor: pointer;
}
.Fav_Button:focus {
  outline: none;
}
.Fav_Button:focus::after {
  content: "";
  border: 2px solid #005FCC;
  position: absolute;
  left: 0;
  top: 0;
  width: 36px;
  height: 36px;
  border-radius: 20px;
  z-index: 0;  
}
.Fav._on .Fav_Button:focus::after {
  border: 2px solid #E0245E;
}
.Fav_Button:hover > svg {
  fill: #888;
}
.Fav_Button:active {
  transform: scale(.96);
}
.Fav_Button > svg {
  position: absolute;
  left: 12px;
  top: 12px;
  height: 18px;
  width: 16px;
  display: block;
  fill: #CCC;
  transition: fill .2s;
}
.Fav > em {
  font-style: normal;
  font-weight: bold;
  color: #888;
  margin: 0 0 0 12px;
}
.Fav._on .Fav_Button > svg {
  fill: #E0245E;
  transition: none;
}
.Fav._on > em {
  color: #E0245E;
}
.Author {
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 24px;
  display: flex;
  margin: 0 0 40px 0;
}
.Author_Avatar {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  overflow: hidden;
  margin: 0 16px 0 0;
  flex-shrink: 0;
}
.Author_Avatar img {
  width: 48px;
  height: 48px;
  object-fit: cover;
  font-family: 'object-fit: cover'; /* IE11 */
}
.Author_Name {
  margin: 0 0 4px 0;
  padding: 0;
  font-weight: bold;
  line-height: 1.5;
}
.Author_Description {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: 1.2rem;
}
@media (min-width: 600px) {
  .Article {
    max-width: 700px;
    padding: 60px;
  }
  .Article_Header {
    margin: 0 0 48px 0;  
  }
}
</style>