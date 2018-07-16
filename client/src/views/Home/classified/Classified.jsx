import React, { Component } from "react";
import { Card, CardTitle, CardImg, CardImgOverlay, Container, Row, Col, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../assets/scss/now-ui-dashboard.css';
import '../../../assets/css/demo.css';





class classified extends Component {
    render() {
        return (
          <Container>
              <Row>
                <Col s="auto">
                    <Row>
                      <Col xs="6">
                        <Card inverse className="Card_SC">
                        <img width="100%" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMVFhUXFxUVFhgXFxgVFRcVFRUWFxUVFxUYHSggGBolGxYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mICYtLS0tLS8tLS0tLS8tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAM8A9AMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwIAAQj/xABDEAABAwIDBQUFBgQFAwUBAAABAAIDBBEFITEGEkFRYRMicYGRBzKhscEUI0LR4fBScoKSFTNiovFDU9IlY3ODwiT/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBBQD/xAAsEQACAgICAQQBAgYDAAAAAAAAAQIRAyESMUEEEyJRYSORBRQyUnGBQrHw/9oADAMBAAIRAxEAPwDIGOuVfo6ffOd1QhYSbJjwWnsQkSdD4qwjhuzYcQnDDdj4+IUmCMFhkmeF1gp3JsfxSKVLsxCPwBFIdnobe4PRTQyolTvWpIyTYuYrs2WtLotQg7sEZK0OtY8RyPELSmC4S5XQCN7yPxd63XQ/RV4nxdEWeKlG/oV6TA2scLIpURkBfGVQ3rKzUuBaVTZJx0JtUTvlRlysVY75QTE63PcYf5nfQJWTIoILFheR0EqPHBASGt3nf7R421V+LbSodlvNaOTW/DqlEMA/fzUkIJzGn70UE80peTq48EIdI0Gi2mlOr7+Iv8kepMeBsHix5gG36LMqGqDTqj9DirHd1vePM6eXNZDLJeTZ4YvwNmLPBbcZiyR5m5lG3TuA1bY6gHnxsUMqY7EroYcikcr1ONxdkUIQ/FsVjiaSSL8Bfiqm0uMiBhaPePyWf1Epeb7xuOaOTAx472xnqtpZfwZC2dtQhsNdNJfeldcHnl4hCYXkG5/d0QZKG2IQFCVBiLGZ2WAebWy/VOGA442QBspAfkOhSC1oyzzurDGkk21C8eas1lsIK+thQXY/EN9nZuNyNL6kJhAQA1RPSxolE1U6YK/GF4M6suSFIuSvHiLdXl2vLxh+YsLpi9wAT1hmEbtvnxVDZjB911zwTq2MAKLJO3o6eKFLZLhzQ3IBGGApTqsTDNXbqpP2gdf7ua/QhCkFI0GBxRSF9kg4JtM4kCVtuo0TlBWAhb0wWrQfp5ckH2ieAA7xCvUkoI1zSv7QKstja0HMknyCfB20TTjpgVtTeTJGSxxakrCq3dkG+m//ABRrWFxOQBJ8AE7cXsXxi4fkW9oqoRCw993wHEpYZINbeH5r7idaZZHOOpPoBoFUa7jzyCknJzdsoxwUI0i6x19dOPXovtRWC1sgBry/46IfJUcB5deqptnD3W1AyHU87DPogUbGWEn1ROgy5n95r7TV248Zk9L/ALsu4MLnk92KR39O6PjqFaZsjVn/AKIb4uabeQK3SCpsbaCpE0VgM/H4ZKWmu5ha4d6P1LeF1HszslVD3i0Dle6Lz4WYJN0uvvNN/NMhPi0xGXEpJxMW2lqy+d/IEgeSEi6vY/BJHK/eaRdzrX/mK4wunMjg3qq3NVZNHG+g9g2zTpWB/NW5tmJ49GlwtwCccJiEbGtHIJgoJuYyUfvyst9iNGOOpnhwu05HTRXaKN9z3HZ9CbDVbSaGF+bo2nyROiw+FtgGNHkmrM2IlhSMbwebs5ATcbpufCyJ1O1+84tjGQ4o57QKCOJ7HMAHabwd5DVKWB4I2V2eiyeTR6GJOQco9oyLXddNOHYyHgIUNj4nM7uRS/V4ZPTvtclvAhT21sfwT0jS46gFdlLuDz70ed7ojS4g3Q6hVYcvLTJM2LjtBFeVb7a3mvJ9CDO6BoCMUvVDIGWRCkOa5TO5GmgXtJge+0mx8QlOjwVzGv3nFzvwrYKaRpFiqWJ4dDrYBOjJxQmUU2I2CwPIaCE5YlM2kphLI6w0HU8l3S0bbiyK7Q4I2rphGWg2NwDzWJcj0pVoQKPaV8zg5sj2NvYHh4KfbKsJkY3f3y1lj0Jzt4plwHZZrGdk6PdY071v9XO6zmtfd7ycyXO+apwRXK0S55apnmm6mrKgshzPvH/a3M/G3oq9O0uIA1JUG0c/fDBo0WHl+qP1E6XH7F4Y27Bckt/En/n99FKTl8B4cT9FVgzd4ZdLlekkucue6PDn9VGypBDCKMzSADTTwaFp2FwQwsAbG3L+UFDNkMB3Yd4jM+tuCGYrgcxm+7kDbk3Mg3gBlbIZ89FkVyY5/FUO9PVRPyB3XcirUeXVJkEZDyxxJLT3XWINul89EyUsha0FxQzVM1LQfpKm1kp7fYx2c9KAc3ON/wCXJMeG10cgsHC49fRZFthiYqMVs03bCBGP5hcu+K3bQFKz7tnSiRznW0G8PMXK+7F4YGx9o4ZnTwV7aNv3NxqWtaeaI4ULRsb0CLk+AXFc7/BXqcX7N1uye63EaIrgm1sLnBr2ljibd7JU8W2VNQN5kjx0abIDNgL2PaACQBmTc3I45rUlQLUrNgilY4C3FEo4xa4KQpi+noe3Ac9wsA0a3OSHbM4lXPe0l7mlw3g14uwjlcaFavyBJfR89pmKg1LY7+4z4u/QLrZSM7t+aVsTjkqa95cM97vW0yy+iZKuV8DQGXQy+j0F2x+w4Gyuvomu1AKzjCdo5muG+MjzGafhigbGJHZCy1V0zzT7RdmwZhbkAD0Wc7RyOpnuAN1oOFY82YZArMtqpzJNM7gH7o8gESrknEXK+LTKTMeeea8qULMl5WWQ0hgarERsVQpZr2V+2S5h2EyU4mG5DMqGaRxs9xJsb24WQTE8Hkcd+N5a4HO3EK9Q08zmWa/eOYIOuSPja0FYxUWKx7wtryTLHiTREXciEi4dhczX3kjdYZ5K5V49BIAyEk2NiADqOq3cQZQUmqHlta0xudyBPwWCvfc355+q0HaDGexpzEPfe2x/0tOvms7tmrfTp1bOfnaukGcIis10nIZeJSpisu9I49beib3tLILcXEelklVYufH/APX6KScuWRsdBVFHocmX45nzOX5qxgtPvzsadARf5n5KGoyDW89fLP8AL1RXZSK8od4oG9Dsa2arhc4GXBEaikilHeA/fVLEdRuC/p/yrUJkk1ybwtn5nmhi9DpR3ZcZQRg2bnnzuq23dBKWQthl7LLkbE303gcjYFd0eI2eGuiIsLEixblyTH/iMT3NjcAQWAm+dszqEaoXJNMzoVrsOic+oPa2ivvWIvKfdja52ets+vTPP9lmGSV0rtXOc4+Ljc/NPPt4kYxlLAwCznPky4BgDRl13z/agGx9IGwmRwyAJ9F7I6h/kHHuVvwFMTeL+IF/RW6GS4zQDGau5DhoQpsPrb2stUfibyqRoOE4g2NuZVeSpEri4DIHNKFeZS4ObctGttfTirNLHJI8bshbfUG7V7tDU99GoUELfstnWLeN9FNh8cbY3WtYAnwS/wDa3xUpaS29rHO6gw/EnClcHCznd1vhzRx20ifJUYybAEMbDO+RvElNFBDHILOAKWIogxx6ohHI5rSW6oZx4umexT5qwnV4fC1wAtcJnqcLZNThh0sFnNJO+R+80m98wU+x1zuwtcB1l6NbsLInqi3huEthZYWyCyHaWsBlcG/xuJ9VqOJYq6Kkke7Ihpt42yWJG5NzqTcp2OKbtEuWTVoJUvurylo2d0LyeSlLBKw2F8+qaaeS4SnSQ7jr8DqORR2kfY9FzmdZB6GK6+Owwk3bdruYXFK88EcoK2xzC9E22uiTCxMRuuN8rXXyuw+Cna1wYBu5gAauRukqGO0Ga4r8DEx3nE+HJOSj/wAuibJkkr4qmZNjsxe4uOpN1FgmEuke3u66crfxHp++Sf6rZaHe03ufL9VSpCI3yu03HhhH/t7rSCOtySqJZeWkqJIw4rYu7VQhrgwcB8bHNItUzvD95H9AnvauQGb+i/xAB9Ck6rjJI/fAqJ6k0Ww3FFGfOQC2jSfl+SL7Lv3Xi/H6obK2zw7gQR8L/NEMPZ3WniD8QsfQ6GmaC2nbI2zgCORXqGkEZEbXOA/CWm9hkG3YdWjPMZ6KDBKm4s5Gn0BfYtI6dPArIOhjrycys+zt7d+5KwOABZftDcgW3W+9nw6KmMRjM0s5duxCxLnZACwy8eiv41iUdHTmWreBq1uQL3kj3W8XFYrje0UlbI1tuzha67Ix5955/E75XyRuN7XQvmlq7ZPtzjpr64uAIYwNijB13b3JPUkpnqWiCjLQbWDGnxcc/n8Qk3BmDt3yOFwwl3iRk0eZTHi5JornVzg4+JcD+S9L5TjEB/GEmVdnKH7ZDLG0/exkvDf4mknRC4HujduuyIOYKrbMYyaSrjmB7oduu/kcbH81ru2eyTapnbwgCS18tHjX1VuTH5RFDI+mA8BkEjd0nNMGG0EzXjdaCDqf0SBh0MrHWs64yITtgVdK2ZrDdpI0cbC3NSqDcqiW+9xj8tDRisILQ2wubXyQytY1tugsOiMVMBtcm55pexZpGa7PpPSxjuXZwfW+slPS6AOIzm9wpKLEdAoqiK65psPJKH+I+lr9Rf7Gfw31V/pvvwOGEYdc7wsmZ9MxjbuA8Uu7O0r7a2CtbWYXUyxWieLcRxPgeC5ePE5rR1c2fj2J+3e0rZiIIjdgPePAkaBKLWqeeIxEtcCHDUEWKGVuI7oyVePBKK2RTyqXQyUZG6F5JgxB/NeTPaF8jT9o8C3Hdqwd13vdHfqqMMVrLRXwhzS1wuDkUu1mDljreh5hRerxcXyXRf6TNyjxfaI8MpN4hT18hLrRf9MtDxbVptvEeGSswjsonyEX3Wl1udheyE7K1oe4POriSfPUJWGHLsZlk1tDhRVcLG3sBzK7OJtkNt+3RAsbwiVp3m96PUWzLR1H1Q+AOGipjiUSRzchwLAdEG+yfeTZe9un4EfRdUFWRkUWEYPe56opIFGT7RxubMWm/dG6P5bhzfQZf0oDO3TL8Vj48E9ba0dp2uH4mHzLCMv7XO9EpzU1y5vNu+3xbr9Cufl1Nl2LcEC5qUlhA1acvA5j8vNFcLojYHgfmNVbwym3u9zG6fGxIPz9Qi9PAGtHLVIcymKK9fWR0sDpX5291o1c7gAl7D/ai6MfeQXcNN11h5g6IJtpjJlqWx/9NmX9R1P0S7PFY+arxY0lcvIic220vAQ2r2lnxCUSzEAN7sbB7rG3zA5k8TxUOER538/gqDWI7hcFmnqPmmZZVGkBijuyzSss1rRq99z1/S5TNicQ+zW/1EDyFvogmHw/et5C3wzKYav/AC42nkT63ScHyzIPPrEzN5aTMjxX6C9llf8AaKKMOzcz7t39OnwssaxGm3DvWJadbcDzWieyOtDHuj1a8B4PAEZfkutKJyrNIn2YifIJN0A/i6/qsn2xrA7EJ2AbvZuawW6NBv8AFavjm00VKGtLgZH5NbfPqfBYltJNv1kk4Fu0dmPDL6IMUEpNoLJNySi2O2yWOl/3MpuQO6TxHJHqqhDgeqy+mqjG9rxq0g+XFa7hr9+NruYB9VfGWrIMmP5UKkeGk3yzBRLDqIckekphe480MxXEYqaznm1zYdSmSy8lQiOLhJMOUMLRkFdvbJAsPqw/deD0Rq/eChhGKXxOhOUm/kKG3+zInYZGC0jQT4jkViNfFnYr9NV47p8F+etpYdyolaRazyfXP6pq3ECLqVAIUhGV18RGy+LKG2focNX2eAPZYkAjQn5KjiGJti6u5D6quyrErTvZEZpcoclT6MhJxdohxqJwpZra7jreiAbLRF0TZLW3s/O9inOB7Xxuac+6fkh2wdM0072kZMleGnoTf5kqOGP25uLLnk54+SDuHzFzAL95unUckLxqBrJAWiweN7oCDYgfD1RxtIB9CrMsDXt3XAH6HmFQyZMT+x0LUWw6U23T5KhWUbmPLW914zA/DI3m3r0XzDqwOPJw1H6IGGR7Y0u9C2UaxvDv6Tdjx6OPokeoptyRruTh5tdofmtJrCC4xuHdkaQeQvkkmobencCPvGNeCOJMZJIHmD6rn+rjtMr9PLTRShZ2cro8s77vW1iB/aW+iv4jGQ23RcVMYexkrc3NF787C/xF/SyMVUIcARoQCPAi4URZFmH7Q0BbvPOt7r5Xwd1r+YB87Zps23ow1jvBC4qbtKBj+Lcj8ldCVwv6EZFxn/kWooe8AmKlisABqf8AgfFDqSC7x4fkmmhphvDk0Z+V/wBErLMZBaOKWGxJ5C3rYKTGaoNkYz/SPUohTUunNzifyHrb0SjtpUls5IOm4B1A1+N0fot5b+kJ9W/00gtLY5HQiyOezOYMrIWdXRnzaSPkEtNl3mNPMBd4LW9lWMd1Y8f0uz+C7T6OUNntMw3cxBj2X7wBOd9Dw5IFK4PLr8z6rQ/aJG10sEn+gn1IWb1I3XuHVLgayJ3Loto2WjBpYTx3G39FiUz81tuy5P2aK+R3G/JPXQmfaCUkCUfaJQB9Pe1y3MdE6CRDtoIA+Fw6FbCVPYucbQn+z6oJsHlaF+PySHgVN2TwU902eaX9jX4I692nisS9p8IbVkji1pPlktnxB3eA81lHtcoN17Zr+8N23gLpqXwFKX6glRHIL6oaZ/dC8sKD9ADDhfMLuTCuWSMvg5Lxbl1Cn5MLiAZGdmx54hjj8CvbJNLado5ku8yVexhrTDJwO44fBSYDTWY3kAFktyv8Bx1jr8hAyENUlPm1c1KkgGSzwYuyviVGJWWORBu08Q7gUp10Ds5QCJGf5g4OaNXDqOPMBOrzwQnE2EOcd253SW2/FYZsI/eqGQSF3GJ7ujcP4R+f1QWtiLKx18mSgyA8nOYA711UtXOCGgG4BdbwLsh5aeSu7TUDpaNsjPfjB+GY+SRmhzjQ3HLjKxa2Um7vZO4AW4i3u/AprpGfdNH8N2emnwsgeFYCXRslYf1a43Pp9E3PgtFc6i1/Sy5qxt2y5zSaSMx29Z3SqewkHa0M0epAkt4jMIrtsy91W9kusjeG+fin+n3GjPUrVi/hdHeUfytP79E2U1IGs37dT8T9QucHwo9o4cWsDf7bhHcSh7JjAbBp19L2UruUhrklEEl4jaZXZbrN7ztkPVZTjFU6R4Dtb3PmnTafH273ZC5Z+I9eA8M0jYpKDMbC1sl1PSYeELfk5/qMnOVLwMlE68Y6KrVybs0Lud2+oXzCpe4oMZfbs3cnhXvol8mw7R1G/FSOvmYR8gkbEvfci5xASRUrQc44y0+ot8kBxGW73eiGOmCVpCt6wKG1PFnfuN+QX56qavdcAtt2BxoTUzATmwBp8k1fgXPwM/ZqhixLWHiERD1VxNw7M5ryYLFyNlnJpon90JXGqYKGTuJcdhyOX5vJ5LO/bG37qM/6rf7StDibfzQX2g4OJaKTiWtLh4jNU34J1/d/swOlk7q8qkEmXmV5LTKz9Zsk5rsi+YXnMXG6RopgwRjLTYgcRb1Rqki3WgdFRqQHSMB53Plmig0RSekDHtkcguVKwLgBSBAw0RP1XNRGHDPgb+C4qnd7yU8TcvFeZ4zXaKEsqnN/icHt/lOZ/wB28PJNOBO3oy06KLamgDmtmA78e8PFmV/Ma+qhwGX6IGqCsh2Vj7GaopDo13axf/HJqB0Dvmi80fde3/SSPEZ/RUMfZ2U8FWNAeyl6xyZA+TrFGpm2cCgcbVBJ07Mt2qju26qeyyDdkd1cT6GydazY+WW4Jaxlzne7i3hYD6obglMyKt7KMd1rGAdczc/vmpfTYpJNtFnqMsWkkyxhEFqqccnub63crO3OHh1K6X/tN33ciAR6FWnQFlS5/wCEvN/5t1tj9EdkpRLGWHNrgWuadC05EIcEUskkxWWVxTR+dpW71753uQfFKeIH71ybpo9yaaEG/ZyyR9bMeWj4BLGMQbsx65rqv+kkT2WKAkaLrGSTGDyN1FSOXeJv7hW+DPI27PG8e90HyQp9RcuPUq9s1Jalv/p+iW6moswnn9V6/JhPT1Qc8k21Wg+z/EjHNuX7r+HULKKKaxTZg9aWOa8aggo8ctg5I2qP0I03CTNo8YcJ44BxNz4JiwDFWywB5yyWeYjWCXFBbQXF1RFUpWRt240OI1RijP3duaDAhFaJ1m3OgzU+Lsoy9FwPaCBfNexJgfC9l9WkJIFdLNK97e6wGwPOyYsLq3FtnZqyeBx2Qw9QptqtH5xxCndDLJG7Vr3D46ry2vG/Z3TVMzpjcF2tnEZ87L4kPG70yuOdVtM1BfCo2PUt7qMqKdSwdow87j4K2MslRxa4DXD8LgfRXgQQDzRPpGLtnQXYUVrKRCEDq5xL7Z5AeCmh7rdUOrnntXZ20+QU8Mj3ZGxHNMrQu9lyKHfYb8SfDPKx6FKtNB2UzmDQEeXG3knOC1rckAx6j3JRKBk7I/zD8x8kqQ2PRLUQtmifG7RwI/I+q5wqYyU7C73mjcd/Ow7rviFHSTKLB32kqI+Tw8eD25/EFAEMBN4/JIdI3/1DxZ8nBNtVWtihJcbapU2Zj7aoNTwsWs8L5u+CLwZ5D+JVTGOLTqe99PoVdwqrY5uRSjVVzZp3kEWvuj+nL80boLMbdKXdhWZt7S9nW0tX20fuVG+89JAQX59d4H1WbbRR95ruFrea2z2vxuNDHIGlwZKC4j8LXNc256XIWMVIL297gCQOvAKmO40K6YPpxYKPEJMrLuMkaqpUOuV59Grsb8Pl3KFx6WS1iT7Bo6XR+p7lA0cyPihGNYY9rGTasdYX5FeptNoG0nspUsmeaN0kjRqfRLTXK4ycDRejIOSNS2O2iYxronuO6fd6dFYw6HerBuDe105XWb0VcBqmzZraY0zxI0Bw4g8uiqWZ+24kjwL3FKzUpKct1BCr7VYn9monOv3nd1vicgoKH2kUkvdlaWHqLj1CTva5iHbOgZTOEjAS4huZvazfHUpGGdS+SG58XKPxZxhGNvaWtJ7o4J+oq9u5ccVkWFU9Q9wAhk4Xu0i3qtIw7BakMb92bW5j811p5cUl/Uv3OP7GaEtRbX+A5HVtIzcV5URh8oyLD8F5KuH9wfHL/a/2Y7Qvu26ma5CsOmGiINdmuW0ddMlnZvNIUdAe4ByuPReZLY2X1rg0uv0P0XvFG+bJw5dhQteCFxUVAY0ucbNaCSegWUbZRxIM7S51sLqSkmYMtED+1dq4vBydmPDgrLIU2tUxXLdjA0DUOC7miEjS1wyPz4FA2REaEq9BvDO6BxDUihV0boQXC7gOWoHUIPglfv1soHGJv+1x/wDJOzagcUjYnhgoKmavabwGF7i2/uyCxDB0cdOWfRJlHyNTFfbLGn1Nd9hicd1pDX24WALybeNk2zStpKXXdLgI2W1GWo8AEoezHBXu36qYfeSuLiejjvE+ZJPohW0e0wq6+RjHfc04DG8i6/3j/UWHQdUDboIZsOwmFrd7tXADnbLzR+mxCBthvF3xukfDJZZxazQwHLK7yRyJyHomGlpg3NzQ0DMuccz9SsRjHOdrKiF8TmndexzCHDIhwtovz7jmy1VQyWnjcWCwEoBMTyeO9wPQ2W8Rse5rXMLQbXG98N4a26K2acSROinc14e0tfZm62xHAXPxJTIyaBas/NckIdKHcgQeR5BQS4Qx1y0kJx2i9nVbSkvjb28IJIdHm8N4b8evpfySxBHM/wDy4pHnTusc6x43sMk+0wNotTyNfE2IjJtrnqNLKKske6mMOW4DfTvDzUEji37sggj3gQQb9QV0+fcI5HIhFF0tAuN9giLC2nRxPwKm/wAJbe1yFYnh3XBzdCpS+2SGl9BWyqMIH8fwTFslsQ+udI1lQ1hjZ2neaXbwvawsRbx6hCg9Pfsan/8A7nDnA8H+5hXpdaPbCGz+w1Gxt5nOmd/a30Cb8Mo6Sn/y4GN6hov/AHHNBaJ1r20ubK2x58RyXM92T7Z0/ZgukNMdQ147tr9Qofvgcgwj+a30QrDm2dkrJEgOjf7v0W2e4pH2aSqv3Im26ycf7V5WIAQMznfxXl42/wAf9lGnkIIKNQy3sUDgGSv0sll05HHiy5Va3XNLL2jnC/uho+a+YkbMuFW2djO45x1c4+gyXkvjZrfyoIRvN7JA282zbHO2mA3mDOcjhf3WjnbU+SP7ZY79kp3PaR2ju5GD/EdXW6DNYXOXOcS4kkkkk5kk5kkpblXQ2MbWzYMPphuh8TrscARY5WPEI1TvcNVmOxG0f2c9nKfuicj/AAEnXwWrMIcAQbg8RpZNU+aESg4smjfdEYIg5o5hD2ZL6+fd459FjQSYWEI4qtiFAyWN8UgDo3gtc08j9eqpRGSQ23t0fFSRbzX2y6D3nnqTo0eSzibyEL2k4yMLpOxiNppQWRn+FmjpPIZDqViWz9cIpczk4WPjfIr9Z4lhUFQ0Coijktfd3mh1r2va/gPRKmPez6imjdG+FjAf8uSJrWvYfG2fgdUlxQ5MRNnKsizL6m6aKU77w53uj4lVtnfZ2aZ3fqu0YNPu7OtyJLiE5wYPAwZNJ6kn6ZIFFms9S1Ydpl818fVW0sVNFh8Z0Dm+B/O67/wtt7h58wD+S0w9HVvObjboF26rDRbIc1BVxdmwnftwGWdzoEGkPNyCU4x7YUYSl0ibaHZyixHddKC17cg9lmvtyJ/EPFK1d7HY3NHZVjgR/wByNrx4d0tTNBLnkCfAIpDVsIIBN9LHL0PAoV6leBn8vLyY1ifs+q6d/Z9rTScQ0S7rz/8AW8AhU6XY2se+zoxHnYl7hby3bkrYa2hkt3HFw/hPvD/yQxpcD87hLl6vJ1QyPpYvyAsH2Cpoi11Q4ynUg91n9oNyPEp7wmhpGEPhghY8Ajejjax1jqCWgXGmR5ILUxNeLFnP8Th5ZFS0srYx3Wtaedz9SlrLNvbH/wAvDjSQFqaSWld37FhOTm6XPyPQq9BO05g3RuKtbLE5xs8CweNQ4Ejhxtz6IBVbIfe70UjmsPeaBYgA6tz5G62EeTpHpS4f1BbDj3stfgrlyXa36AXKrUGCOaP8w+gV2kwp8bi5krs+BAITo4n5FTzR8A6s7Z7rxteABbNpBJHH4r6mthdYXNzxOi+JntoT77+hWjdZWY3KRkbXL79lVdkFFionvE7oF3hLC2JgOpz9TdUWHvbh4i58Ar1ZOI4zIdGtLj4AXWPqglt2Yhtbi8lRUyOcbta5zWDgGhxAt1NrlC2OB1y6nT10Xqh+85zv4iT6m/1U1Lk7Meht/wApEuyhBCkoAW+KPbGbQvgmFLMT2bsmE/hPAA/wn4FVKSnBsGngScgMzbhpwOYsvYlhwkbYkhw91w1B/JDGVOz0lao1J8lgoornNDsHmc+GPfOYaA63EtyPxCKxGwurF1ZH5O5Zy2zW++fQdVZo+6OZ4k6kobGLu3uP0RBrrBY/oKLLQl55q5v5cEOgkANypHVF0DQxMnNK08LeGioVLSz3rkcxorDZXc1Yhz1N0LiFyA7K4KdtWCrVZhzXjKzXcCBb1S/VMfD749DdDRtnzaCrN4mA6l7j/SAAP9x9ENfvIXjeI2qIs8ix1v7s/oilKd8XBXOzxbmzo4GlBFvDWPcTujrdRDEYy8tdYuBsb903HUaq1SNLTe9lBidDTzlwe3M6PaLSNPMO4+BWcYqK+w4tubvov081wezJJ/hOd/A81zVt7aMuY37xoJ3dC4jVufHx4pNfWTYdI1szu0hebMeNctbt1H7zTS6q329tHqBvHhvNte/QgL3QcofX7giioDUn76qZE0axsJc+44PcQAD0F014fs/SMsW2cRxcS7zsTZc4ZTxVHfLRvcctSiQw1o0y/fwVeOMauiLLknfFugTU0TIpN1u7uStcN0aA6Gw8x8V3hDz3oXkb8ZseXQ58CCD5q3Pg28QQ7dINwbXN+q+MwK0vaiR17WcLDPzGiH22pWg1ljKHGT/94LopyF3G1WXPXLBxVBIfWtXl0vITx//Z" alt="Card image cap" />
                          {/* <CardImg width="100%" src="https://workplacepsychology.files.wordpress.com/2011/10/jobs.jpg" alt="Card image cap"              class="cardHover" /> */}
                             <div class="middle">
                               </div>
                                <CardImgOverlay>
                                 <CardTitle>Jobs</CardTitle>
                                  <Link to="Job">
                                   View Jobs
                                 </Link>
                               </CardImgOverlay>
                          </Card>
                         </Col>

                        <Col xs="6">
                         <Card inverse className= "Card_SC">
                         <img width="100%" src="https://odis.homeaway.com/odis/listing/7c9db98b-f56e-4140-8f68-889119a23189.c9.jpg" alt="Card image cap" />
                          {/* <CardImg width="100%" src="https://www.google.co.za/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjSncHS_4DcAhUNyKQKHfDgB1AQjRx6BAgBEAU&url=http%3A%2F%2Ftransformsa.co.za%2F2014%2F09%2Fmore-sa-women-buying-property-4%2F&psig=AOvVaw0kKYwEh97oCbKpbW4DMN2M&ust=1530640843948086"alt="Card image cap" /> */}
                             <CardImgOverlay>
                               <CardTitle>Properties</CardTitle>
                                <Link to="Property">
                                 View Properties
                                </Link>
                             </CardImgOverlay>
                          </Card>
                        </Col>
                     </Row>

                      <Row>
                        <Col xs="6">
                           <Card inverse className= "Card_SC">
                           <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCM6aHIKwStRF3iGecIR-4PqJ7yqEy07pgbSCBZrR8iwQ2Wds" alt="Card image cap" />
                           {/* <CardImg width="100%" src="https://workplacepsychology.files.wordpress.com/2011/10/jobs.jpg" alt="Card image cap" /> */}
                              <CardImgOverlay>
                                <CardTitle>Businesses</CardTitle>
                                <Link to="Business">
                                View Business
                                </Link>
                             </CardImgOverlay>
                          </Card>
                        </Col>

                        <Col xs="6">
                           <Card inverse className= "Card_SC">
                           <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9q0jjWH9wPwJxpm7ufDIfi3iGI8F_8RNLbcqm9vL1rs9j95EbA" alt="Card image cap" />
                           {/* <CardImg width="100%" src="https://workplacepsychology.files.wordpress.com/2011/10/jobs.jpg" alt="Card image cap" /> */}
                              <CardImgOverlay>
                                <CardTitle>Other</CardTitle>
                                <Link to="Other">
                                View Other
                                </Link>
                             </CardImgOverlay>
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  <Col xs="3">
                
                  </Col>
                </Row>
              </Container>
            )
        }
}

export default classified;


