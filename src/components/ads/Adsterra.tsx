// Adsterra 广告位集中封装（billsschedule2026.online）
// 用法：Popunder 放 <head>、SocialBar 放 </body> 前（全站，layout 里）；
//       NativeBanner / Banner / Smartlink 按需在页面 body 内放置。
import Script from 'next/script';

// Popunder —— Adsterra 要求放在 </head> 前
export function Popunder() {
  return (
    <Script
      id="adsterra-popunder"
      src="https://pl30976499.profitableratecpmnetwork.com/14/2b/64/142b64fbb8c2eb5fb8e5e14732a34e30.js"
      strategy="afterInteractive"
    />
  );
}

// Social Bar —— 放在 </body> 前
export function SocialBar() {
  return (
    <Script
      id="adsterra-socialbar"
      src="https://pl30976501.profitableratecpmnetwork.com/09/6a/e8/096ae87ab41226444e5954842fa39410.js"
      strategy="afterInteractive"
    />
  );
}

// Native Banner
export function NativeBanner() {
  return (
    <>
      <Script
        id="adsterra-native"
        async
        data-cfasync="false"
        src="https://pl30976502.profitableratecpmnetwork.com/3486a9e8f02f65f02cecbc611f008cdd/invoke.js"
        strategy="afterInteractive"
      />
      <div id="container-3486a9e8f02f65f02cecbc611f008cdd" />
    </>
  );
}

// 标准尺寸 Banner（atOptions + invoke.js）
export function Banner({
  adKey,
  width,
  height,
}: {
  adKey: string;
  width: number;
  height: number;
}) {
  return (
    <>
      <Script
        id={`adsterra-atopts-${adKey}`}
        strategy="afterInteractive"
      >{`atOptions = { 'key' : '${adKey}', 'format' : 'iframe', 'height' : ${height}, 'width' : ${width}, 'params' : {} };`}</Script>
      <Script
        id={`adsterra-invoke-${adKey}`}
        src={`https://www.highrevenueformat.com/${adKey}/invoke.js`}
        strategy="afterInteractive"
      />
    </>
  );
}

// Smartlink —— 标准超链接，可放在 footer 等处
export function Smartlink({ className }: { className?: string }) {
  return (
    <a
      href="https://www.profitableratecpmnetwork.com/japb7wb7n?key=61a6ebb63cccbd253c32790f543e9061"
      target="_blank"
      rel="nofollow noopener"
      className={className}
    >
      Sponsored
    </a>
  );
}

// 首页广告组合（Native + 全尺寸 Banner）
export function HomeAdStack() {
  return (
    <div className="my-10 space-y-6">
      <p className="text-center text-[10px] uppercase tracking-widest text-zinc-600">
        Advertisement
      </p>
      <NativeBanner />
      <Banner adKey="b372ecf6ebd23a0deb54c0bebeda0e21" width={468} height={60} />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />
      <Banner adKey="5d146ebf8de0e1bf65577df613316798" width={320} height={50} />
      <Banner adKey="1579b0e8977abe534a5029f5b81ea5e8" width={160} height={300} />
    </div>
  );
}

// 子页广告组合（两枚 Banner，密度更低）
export function SubpageAdStack() {
  return (
    <div className="my-10 space-y-6">
      <p className="text-center text-[10px] uppercase tracking-widest text-zinc-600">
        Advertisement
      </p>
      <Banner adKey="b372ecf6ebd23a0deb54c0bebeda0e21" width={468} height={60} />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />
    </div>
  );
}
