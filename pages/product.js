import Header from '../components/product/header'
import Process from '../components/product/process'
import Card from '../components/product/card'
import Link from 'next/link'
import style from '../styles/product/index.module.css'


export default function Product() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Header />
      <Card/>
      <Process
        index={1}
        title="采摘"
        content={
          <span>
            选择成熟充分，质地尚未软化，形状整齐，无病虫害，无碰伤的果实
            <br />
            <br />
            在柿子发黄，还很硬的时候摘下来。把变软了，有伤疤的挑出去；记得一定要有把，就是柿子蒂，没有蒂的不能做柿饼。然后清洗干净，晾干水分。如果感觉干净的话，用毛巾擦一遍就行
          </span>
        }
      />
      <Process
        index={2}
        title="洗果去皮"
        content={
          <span>
            去皮时要求柿蒂周围果皮残留不超过1厘米
            <br />
            <br />
            在过去都是用手工的方法去皮，但是现在多数是机械去皮了。而如果是自己制作柿子，拿就得用刀来削皮了，在操作的过程中要记住去皮要干净，同时要薄且均匀。削下来的皮可不要扔掉了哦，在后面出霜的时候还要用到它的。
          </span>
        }
      />
      <Process
        index={3}
        title="自然晾晒"
        content={
          <span>
            晾晒时最低离地高度不小于50厘米，露天自然曝晒2至3天，然后用篷布覆盖遮阳，自然风干
            <br />
            <br />
            当柿子全部去皮了之后，再用一根干净的的细绳子，把它们逐个串起来。这个过程中需要注意，柿子不能挨得太近，柿子和柿子之间大约保持两寸左右的距离，这样主要是为了保证其通风，利于晾晒。把它们系好了之后，就悬挂在有太阳且通风良好的地方进行晾晒。在这个期间的雨水少，阳光也是很充足的。
          </span>
        }
      />
      <Process
        index={6}
        title="揉捏整形"
        content={
          <span>
            在晾晒一周左右，果面发白，果肉微软时，用手轻轻揉捏，挤压果肉，促进软化
            <br />
            <br />
            一般晾晒两三天，当看到柿子表面发白并结皮了。这个时候就可以用手轻轻的揉捏柿子了，就是为了让柿子更快的软化、脱涩。不过这个过程需要注意不能太用力了，以免把柿子捏破了。捏好之后再继续晾晒，当你发现柿子表面开始出现皱纹了，就可以进行第二次揉捏了。等过了两三天，就要进行第三次揉捏了，记住要把柿子里的核、果柄等全都捏出来。然后还要继续晾晒，直到柿饼开始发硬，用手捏不动了的时候，就说明柿饼里面的水分很少了，这个时候就要开始准备上霜了。
          </span>
        }
      />
      <Process
        index={4}
        title="剪柄下架"
        content={
          <span>
            果肉完全软化、无硬芯，含水量≤35%，剪除果柄，下架收果，产品即“无霜饼”。
            <br />
            <br />
          </span>
        }
      />
      <Process
        index={5}
        title="回软潮霜"
        content={
          <span>
            将晒好的无霜饼装入干净容器中苫盖，置于阴凉的室内，经4至5天，柿饼回软后放置在通风阴凉处摊晾进行潮霜，产品即“霜饼”。
            <br />
            <br />
            只要把两个柿饼的蒂部朝外，然后把柿子放在干净的容器里面，一般是先放一些之前的晒干的柿子皮，然后放一层柿饼，再放一些柿子皮。如此反复不停地放，直到把所有的柿饼都放进去了。最后把容器密封好，放置在阴凉的地方捂霜就可以了。这个过程主要是要控制温度，一般阅读越低对上霜越有利。
          </span>
        }
      />
      <div className={style.btn}>
        <Link href="/contact">
          <div className={style.btn}>联系我们</div>
        </Link>
      </div>
    </div>
  )
}
