"use client";

import SubpageLayout from '@/components/SubpageLayout';

export default function TermsOfService() {
  return (
    <SubpageLayout title="服务条款">
      <div className="space-y-6">
        <h2 className="text-4xl font-normal uppercase font-['Oswald',sans-serif] mb-8 text-center">红色井界™ 服务条款</h2>
        <div className="w-64 h-[2px] bg-[#ff9408] mx-auto mb-12"></div>
        
        <p className="mb-4 text-gray-600">最后更新日期：2024年4月1日</p>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">1. 接受条款</h3>
            <p>
              通过使用红色井界™，您同意受本服务条款的约束。如果您不同意这些条款，请勿使用我们的服务。
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">2. 服务描述</h3>
            <p>
              红色井界™是一款基于浏览器的实时战略游戏，允许用户在各种设备上进行游戏。我们可能会不时更新、修改或暂时中断服务，恕不另行通知。
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">3. 用户账户</h3>
            <p className="mb-2">
              您可能需要创建账户才能使用某些功能。您同意：
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>提供准确、完整和最新的信息</li>
              <li>保护您的账户安全，包括密码</li>
              <li>对您账户下的所有活动负责</li>
              <li>遵守所有适用的法律和规定</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">4. 用户行为</h3>
            <p className="mb-2">
              您同意不会：
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>以任何可能损害、禁用或过度负担我们服务的方式使用我们的服务</li>
              <li>使用任何机器人、爬虫或其他自动化方式访问我们的服务</li>
              <li>尝试获取未经授权的访问</li>
              <li>干扰或中断服务或与服务相连的服务器</li>
              <li>传播恶意软件或其他有害代码</li>
              <li>骚扰、威胁或伤害其他用户</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">5. 知识产权</h3>
            <p>
              红色井界™及其内容（包括但不限于文本、图形、徽标、按钮图标、图像、音频剪辑、数据编辑和软件）是RA2WEB LTD的财产，受国际版权法保护。未经我们明确许可，您不得复制、修改、分发我们的内容。
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">6. 免责声明</h3>
            <p>
              我们的服务按"原样"提供，不附带任何形式的明示或暗示的保证。我们不保证服务将不间断、及时、安全或无错误，也不保证通过使用服务获得的结果将准确或可靠。
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">7. 责任限制</h3>
            <p>
              在法律允许的最大范围内，RA2WEB LTD及其员工、管理人员、董事、代理人、供应商或许可方对因使用或无法使用我们的服务而导致的任何直接、间接、偶然、特殊、后果性或惩罚性损害不承担责任。
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">8. 条款修改</h3>
            <p>
              我们可能会不时修改这些条款。修改后的条款将在我们的网站上发布时生效。您继续使用我们的服务即表示您同意修改后的条款。
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">9. 联系我们</h3>
            <p>
              如果您对这些条款有任何疑问，请通过contact@chronodivide.com联系我们。
            </p>
          </section>
        </div>
      </div>
    </SubpageLayout>
  );
} 