import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import CheckBox from "../../components/Forms/Checkbox";
import HeaderBack from "../../components/HeaderBack";

import Backgroud from "../../assets/backgroudmenu.png";
import styles from "./styles";
import Pasta from "../../assets/Caminho46.png";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../../hooks/auth";
import { useRoute, useNavigation } from "@react-navigation/native";
import api from "../../service/axios";

function Checklist() {
  const { user } = useAuth();

  const route: any = useRoute();
  const { vessel }: any = route.params;
  const {navigate} = useNavigation()

  const [a, seta] = useState(Boolean);
  const [b, setb] = useState(Boolean);
  const [c, setc] = useState(Boolean);
  const [d, setd] = useState(Boolean);
  const [e, sete] = useState(Boolean);
  const [f, setf] = useState(Boolean);
  const [g, setg] = useState(Boolean);
  const [h, seth] = useState(Boolean);
  const [i, seti] = useState(Boolean);
  const [j, setj] = useState(Boolean);
  const [k, setk] = useState(Boolean);
  const [l, setl] = useState(Boolean);
  const [m, setm] = useState(Boolean);
  const [n, setn] = useState(Boolean);
  const [o, seto] = useState(Boolean);
  const [p, setp] = useState(Boolean);
  const [q, setq] = useState(Boolean);
  const [r, setr] = useState(Boolean);
  const [s, sets] = useState(Boolean);
  const [t, sett] = useState(Boolean);
  const [u, setu] = useState(Boolean);
  const [v, setv] = useState(Boolean);
  const [aa, setaa] = useState(Boolean);
  const [ab, setab] = useState(Boolean);
  const [ac, setac] = useState(Boolean);
  const [ad, setad] = useState(Boolean);
  const [ae, setae] = useState(Boolean);
  const [af, setaf] = useState(Boolean);
  const [ag, setag] = useState(Boolean);
  const [ah, setah] = useState(Boolean);
  const [ai, setai] = useState(Boolean);
  const [aj, setaj] = useState(Boolean);
  const [ak, setak] = useState(Boolean);
  const [al, setal] = useState(Boolean);
  const [am, setam] = useState(Boolean);
  const [an, setan] = useState(Boolean);
  const [ao, setao] = useState(Boolean);
  const [ap, setap] = useState(Boolean);
  const [aq, setaq] = useState(Boolean);
  const [ar, setar] = useState(Boolean);
  const [as, setas] = useState(Boolean);
  const [at, setat] = useState(Boolean);
  const [au, setau] = useState(Boolean);
  const [av, setav] = useState(Boolean);
  const [aaa, setaaa] = useState(Boolean);
  const [aab, setaab] = useState(Boolean);
  const [aac, setaac] = useState(Boolean);
  const [aad, setaad] = useState(Boolean);
  const [aae, setaae] = useState(Boolean);
  const [aaf, setaaf] = useState(Boolean);
  const [aag, setaag] = useState(Boolean);
  const [aah, setaah] = useState(Boolean);
  const [aai, setaai] = useState(Boolean);
  const [aaj, setaaj] = useState(Boolean);
  const [aak, setaak] = useState(Boolean);
  const [aal, setaal] = useState(Boolean);
  const [aam, setaam] = useState(Boolean);
  const [aan, setaan] = useState(Boolean);
  const [aao, setaao] = useState(Boolean);

  async function  handleLoadCheckList(){
    const response = await api.get(`/vessels/${vessel.id}/checkList`)
    console.log(response.data)
    const check = response.data
    seta(check.a)
    setb(check.b)
    setc(check.c)
    setd(check.d)
    sete(check.e)
    setf(check.f)
    setg(check.g)
    seth(check.h)
    seti(check.i)
    setj(check.j)
    setk(check.k)
    setl(check.l)
    setm(check.m)
    setn(check.n)
    seto(check.o)
    setp(check.p)
    setq(check.q)
    setr(check.r)
    sets(check.s)
    sett(check.t)
    setu(check.u)
    setv(check.v)
    setaa(check.aa)
    setab(check.ab)
    setac(check.ac)
    setad(check.ad)
    setae(check.ae)
    setaf(check.af)
    setag(check.ag)
    setah(check.ah)
    setai(check.ai)
    setaj(check.aj)
    setak(check.ak)
    setal(check.al)
    setam(check.am)
    setan(check.an)
    setao(check.ao)
    setap(check.ap)
    setaq(check.aq)
    setar(check.ar)
    setas(check.as)
    setat(check.at)
    setau(check.au)
    setav(check.av)
    setaaa(check.aaa)
    setaab(check.aab)
    setaac(check.aac)
    setaad(check.aad)
    setaae(check.aae)
    setaaf(check.aaf)
    setaag(check.aag)
    setaah(check.aah)
    setaai(check.aai)
    setaaj(check.aaj)
    setaak(check.aak)
    setaal(check.aal)
    setaam(check.aam)
    setaan(check.aan)
    setaao(check.aao)


  }

  async function handleSaveCheckList(){
    try {
      const response = await api.put(`/vessels/${vessel.id}/checkList`,{
        a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v,
        aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av,
        aaa, aab, aac, aad, aae, aaf, aag, aah, aai, aaj, aak, aal, aam, aan, aao,
      })
      console.log(response.data)
      navigate("Vessel", { vessel });
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(()=>{
    handleLoadCheckList()
  }, [])

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />


        {!user.employee && !user.master ?  <>
          <View style={styles.content}>
          <View style={styles.containerbox}>
            <Image source={Pasta} />
            <Text style={styles.containerboxText}>CheckList</Text>
          </View>
          <View style={styles.icon}>
            <Feather size={17} color="#FA5A4C" name="x" />
            <Feather size={17} color="#63E669" name="check" />
            <Text style={styles.label}>Itens</Text>
          </View>
          {/* CheckBox */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollviewBox}
          >

            <CheckBox value={a} onPress={()=>{}} label="Óleo do Motor" />
            <CheckBox value={b}  onPress={()=>{}} label="Óleo da Rabeta" />
            <CheckBox value={c}  onPress={()=>{}} label="Óleo do Gerador" />
            <CheckBox value={d}  onPress={()=>{}} label="Bujões" />
            <CheckBox value={e}  onPress={()=>{}} label="Âncora" />
            <CheckBox value={f}  onPress={()=>{}} label="Hélice" />
            <CheckBox value={g}  onPress={()=>{}} label="Estrobo" />
            <CheckBox value={h}  onPress={()=>{}} label="Tanque de Água" />
            <CheckBox value={i}  onPress={()=>{}} label="Farol" />
            <CheckBox value={j}  onPress={()=>{}} label="Luz de Navegação" />
            <CheckBox value={k}  onPress={()=>{}} label="Documentação" />
            <CheckBox value={l}  onPress={()=>{}} label="GPS" />
            <CheckBox value={m}  onPress={()=>{}} label="Som" />
            <CheckBox value={n}  onPress={()=>{}} label="Churrasqueira" />
            <CheckBox value={o}  onPress={()=>{}} label="Tapete" />
            <CheckBox value={p}  onPress={()=>{}} label="Bomba de Porão" />
            <CheckBox value={q}  onPress={()=>{}} label="Bomba de Água Doce" />
            <CheckBox value={r}  onPress={()=>{}} label="Microondas" />
            <CheckBox value={s}  onPress={()=>{}} label="Automático" />
            <CheckBox value={t}  onPress={()=>{}} label="Sonar" />
            <CheckBox value={u}  onPress={()=>{}} label="Flap" />
            <CheckBox value={v}  onPress={()=>{}} label="TRIM" />

            <CheckBox value={aa}  onPress={()=>{}} label="Escada" />
            <CheckBox value={ab}  onPress={()=>{}} label="Cooler" />
            <CheckBox value={ac}  onPress={()=>{}} label="Carreta" />
            <CheckBox value={ad}  onPress={()=>{}} label="Bóia Circular" />
            <CheckBox value={ae}  onPress={()=>{}} label="Guarda Mancebo" />
            <CheckBox value={af}  onPress={()=>{}} label="Estofamentos" />
            <CheckBox value={ag}  onPress={()=>{}} label="Luz de Cortesia" />
            <CheckBox value={ah}  onPress={()=>{}} label="Antena" />
            <CheckBox value={ai}  onPress={()=>{}} label="Mastro" />
            <CheckBox value={aj}  onPress={()=>{}} label="Frigobar" />
            <CheckBox value={ak}  onPress={()=>{}} label="Buzina" />
            <CheckBox value={al}  onPress={()=>{}} label="Guincho Elétrico" />
            <CheckBox value={am}  onPress={()=>{}} label="Chave Geral" />
            <CheckBox value={an}  onPress={()=>{}} label="Inversor" />
            <CheckBox value={ao}  onPress={()=>{}} label="Para-brisa" />
            <CheckBox value={ap}  onPress={()=>{}} label="Portinha da Popa" />
            <CheckBox value={aq}  onPress={()=>{}} label="Gel Coat" />
            <CheckBox value={ar}  onPress={()=>{}} label="Capa de Proteção" />
            <CheckBox value={as}  onPress={()=>{}} label="Capota" />
            <CheckBox value={at}  onPress={()=>{}} label="Fechamento de Capota" />
            <CheckBox value={au}  onPress={()=>{}} label="Bússola" />
            <CheckBox value={av}  onPress={()=>{}} label="Cabos de Chupeta" />

            <CheckBox value={aaa}  onPress={()=>{}} label="Luz de Cabine" />
            <CheckBox value={aab}  onPress={()=>{}} label="Bateria" />
            <CheckBox value={aac}  onPress={()=>{}} label="Extintores" />
            <CheckBox value={aad}  onPress={()=>{}} label="Rádio VHF" />
            <CheckBox value={aae}  onPress={()=>{}} label="Auto Falantes" />
            <CheckBox value={aaf}  onPress={()=>{}} label="TV" />
            <CheckBox value={aag}  onPress={()=>{}} label="DVD" />
            <CheckBox value={aah}  onPress={()=>{}} label="Cabos" />
            <CheckBox value={aai}  onPress={()=>{}} label="Coletes" />
            <CheckBox value={aaj}  onPress={()=>{}} label="Ar Condicionado" />
            <CheckBox value={aak}  onPress={()=>{}} label="Gaiuta" />
            <CheckBox value={aal}  onPress={()=>{}} label="Vigia Lateral" />
            <CheckBox value={aam}  onPress={()=>{}} label="Defensas" />
            <CheckBox value={aan}  onPress={()=>{}} label="Luz Sub-Aquatica" />
            <CheckBox value={aao}  onPress={()=>{}} label="Copos" />
          </ScrollView>
          {/*  final */}
        </View>
        </> : (
          <>
            <View style={styles.content}>
            <View style={styles.containerbox}>
              <Image source={Pasta} />
              <Text style={styles.containerboxText}>CheckList</Text>
            </View>
            <View style={styles.icon}>
              <Feather size={17} color="#FA5A4C" name="x" />
              <Feather size={17} color="#63E669" name="check" />
              <Text style={styles.label}>Itens</Text>
            </View>
            {/* CheckBox */}
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.scrollviewBox}
            >

              <CheckBox value={a} onPress={() => seta(!a)} label="Óleo do Motor" />
              <CheckBox value={b}  onPress={() => setb(!b)} label="Óleo da Rabeta" />
              <CheckBox value={c}  onPress={() => setc(!c)} label="Óleo do Gerador" />
              <CheckBox value={d}  onPress={() => setd(!d)} label="Bujões" />
              <CheckBox value={e}  onPress={() => sete(!e)} label="Âncora" />
              <CheckBox value={f}  onPress={() => setf(!f)} label="Hélice" />
              <CheckBox value={g}  onPress={() => setg(!g)} label="Estrobo" />
              <CheckBox value={h}  onPress={() => seth(!h)} label="Tanque de Água" />
              <CheckBox value={i}  onPress={() => seti(!i)} label="Farol" />
              <CheckBox value={j}  onPress={() => setj(!j)} label="Luz de Navegação" />
              <CheckBox value={k}  onPress={() => setk(!k)} label="Documentação" />
              <CheckBox value={l}  onPress={() => setl(!l)} label="GPS" />
              <CheckBox value={m}  onPress={() => setm(!m)} label="Som" />
              <CheckBox value={n}  onPress={() => setn(!n)} label="Churrasqueira" />
              <CheckBox value={o}  onPress={() => seto(!o)} label="Tapete" />
              <CheckBox value={p}  onPress={() => setp(!p)} label="Bomba de Porão" />
              <CheckBox value={q}  onPress={() => setq(!q)} label="Bomba de Água Doce" />
              <CheckBox value={r}  onPress={() => setr(!r)} label="Microondas" />
              <CheckBox value={s}  onPress={() => sets(!s)} label="Automático" />
              <CheckBox value={t}  onPress={() => sett(!t)} label="Sonar" />
              <CheckBox value={u}  onPress={() => setu(!u)} label="Flap" />
              <CheckBox value={v}  onPress={() => setv(!v)} label="TRIM" />

              <CheckBox value={aa}  onPress={() => setaa(!aa)} label="Escada" />
              <CheckBox value={ab}  onPress={() => setab(!ab)} label="Cooler" />
              <CheckBox value={ac}  onPress={() => setac(!ac)} label="Carreta" />
              <CheckBox value={ad}  onPress={() => setad(!aa)} label="Bóia Circular" />
              <CheckBox value={ae}  onPress={() => setae(!ae)} label="Guarda Mancebo" />
              <CheckBox value={af}  onPress={() => setaf(!af)} label="Estofamentos" />
              <CheckBox value={ag}  onPress={() => setag(!ag)} label="Luz de Cortesia" />
              <CheckBox value={ah}  onPress={() => setah(!ah)} label="Antena" />
              <CheckBox value={ai}  onPress={() => setai(!ai)} label="Mastro" />
              <CheckBox value={aj}  onPress={() => setaj(!aj)} label="Frigobar" />
              <CheckBox value={ak}  onPress={() => setak(!ak)} label="Buzina" />
              <CheckBox value={al}  onPress={() => setal(!al)} label="Guincho Elétrico" />
              <CheckBox value={am}  onPress={() => setam(!am)} label="Chave Geral" />
              <CheckBox value={an}  onPress={() => setan(!an)} label="Inversor" />
              <CheckBox value={ao}  onPress={() => setao(!ao)} label="Para-brisa" />
              <CheckBox value={ap}  onPress={() => setap(!ap)} label="Portinha da Popa" />
              <CheckBox value={aq}  onPress={() => setaq(!aq)} label="Gel Coat" />
              <CheckBox value={ar}  onPress={() => setar(!ar)} label="Capa de Proteção" />
              <CheckBox value={as}  onPress={() => setas(!as)} label="Capota" />
              <CheckBox value={at}  onPress={() => setat(!at)} label="Fechamento de Capota" />
              <CheckBox value={au}  onPress={() => setau(!au)} label="Bússola" />
              <CheckBox value={av}  onPress={() => setav(!av)} label="Cabos de Chupeta" />

              <CheckBox value={aaa}  onPress={() => setaaa(!aaa)} label="Luz de Cabine" />
              <CheckBox value={aab}  onPress={() => setaab(!aab)} label="Bateria" />
              <CheckBox value={aac}  onPress={() => setaac(!aac)} label="Extintores" />
              <CheckBox value={aad}  onPress={() => setaad(!aad)} label="Rádio VHF" />
              <CheckBox value={aae}  onPress={() => setaae(!aae)} label="Auto Falantes" />
              <CheckBox value={aaf}  onPress={() => setaaf(!aaf)} label="TV" />
              <CheckBox value={aag}  onPress={() => setaag(!aag)} label="DVD" />
              <CheckBox value={aah}  onPress={() => setaah(!aah)} label="Cabos" />
              <CheckBox value={aai}  onPress={() => setaai(!aai)} label="Coletes" />
              <CheckBox value={aaj}  onPress={() => setaaj(!aaj)} label="Ar Condicionado" />
              <CheckBox value={aak}  onPress={() => setaak(!aak)} label="Gaiuta" />
              <CheckBox value={aal}  onPress={() => setaal(!aal)} label="Vigia Lateral" />
              <CheckBox value={aam}  onPress={() => setaam(!aam)} label="Defensas" />
              <CheckBox value={aan}  onPress={() => setaan(!aan)} label="Luz Sub-Aquatica" />
              <CheckBox value={aao}  onPress={() => setaao(!aao)} label="Copos" />
            </ScrollView>
            {/*  final */}
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.containerButton}
              onPress={handleSaveCheckList}
            >
              <Text style={styles.containerButtonText}>SALVAR</Text>
            </TouchableOpacity>
          </View>
          </>
        )}

      </ImageBackground>
    </>
  );
}

export default Checklist;
