import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import CheckBox from "../../../components/Forms/Checkbox";
import HeaderBack from "../../../components/HeaderBack";

import Backgroud from "../../../assets/backgroudmenu.png";
import styles from "./styles";
import Pasta from "../../../assets/Caminho46.png";
import { Feather } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import api from "../../../service/axios";

import { useAuth } from "../../../hooks/auth";


function Checklist() {
  const route: any = useRoute();
  const { vessel }: any = route.params;
  const {navigate} = useNavigation()
  const { user } = useAuth();


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

  async function  handleLoadCheckList(){
    const response = await api.get(`/vessels/${vessel.id}/checkList`)
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
  }

  async function handleSaveCheckList(){
    try {
      const response = await api.put(`/vessels/${vessel.id}/checkList`,{
        a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v,
        aa, ab, ac, ad, ae, af, ag, ah, ai, aj,
      })
      console.log(response.data)
      navigate("Vessel", { vessel });
    } catch (error) {

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
            <CheckBox value={a} onPress={() => seta(!a)} label="Painel" />
            <CheckBox value={b}  onPress={() => setb(!b)} label="Botão de Partida" />
            <CheckBox value={c}  onPress={() => setc(!c)} label="Reler de Partida" />
            <CheckBox value={d}  onPress={() => setd(!d)} label="Entrada de Água de Turbina" />
            <CheckBox value={e}  onPress={() => sete(!e)} label="Âncora" />
            <CheckBox value={f}  onPress={() => setf(!f)} label="Bujões" />
            <CheckBox value={g}  onPress={() => setg(!g)} label="Nível de Arrefecimento" />
            <CheckBox value={h}  onPress={() => seth(!h)} label="Nível de Óleo do Motor" />
            <CheckBox value={i}  onPress={() => seti(!i)} label="Sistema de Direção" />
            <CheckBox value={j}  onPress={() => setj(!j)} label="Jatos laterais" />
            <CheckBox value={k}  onPress={() => setk(!k)} label="Fecha e Trava a Tampa de Proa" />
            <CheckBox value={l}  onPress={() => setl(!l)} label="Fecha e Trava a Tampa de Proa" />
            <CheckBox value={m}  onPress={() => setm(!m)} label="Bagageiro de Proa" />
            <CheckBox value={n}  onPress={() => setn(!n)} label="Bagageiro de Proa" />

            <CheckBox value={o}  onPress={() => seto(!o)} label="Escada" />
            <CheckBox value={p}  onPress={() => setp(!p)} label="Cordão de Segurança" />
            <CheckBox value={q}  onPress={() => setq(!q)} label="Documentação" />
            <CheckBox value={r}  onPress={() => setr(!r)} label="Manoplas" />
            <CheckBox value={s}  onPress={() => sets(!s)} label="Banco" />
            <CheckBox value={t}  onPress={() => sett(!t)} label="Chave Reserva" />
            <CheckBox value={u}  onPress={() => setu(!u)} label="Ponteira" />
            <CheckBox value={v}  onPress={() => setv(!v)} label="Friso Lateral" />
            <CheckBox value={aa}  onPress={() => setaa(!aa)} label="Retrovisor" />
            <CheckBox value={ab}  onPress={() => setab(!ab)} label="Luz de Navegação" />
            <CheckBox value={ac}  onPress={() => setac(!ac)} label="Casco" />
            <CheckBox value={ad}  onPress={() => setad(!aa)} label="Capa de Proteção" />
            <CheckBox value={ae}  onPress={() => setae(!ae)} label="Carreta" />
            <CheckBox value={af}  onPress={() => setaf(!af)} label="Amortecedor de Proa" />

            <CheckBox value={ag}  onPress={() => setag(!ag)} label="Amortecedor de Popa" />
            <CheckBox value={ah}  onPress={() => setah(!ah)} label="Cooler" />
            <CheckBox value={ai}  onPress={() => setai(!ai)} label="Som" />
            <CheckBox value={aj}  onPress={() => setaj(!aj)} label="Tanque Reserva" />

          </ScrollView>
          {/*  final */}
        </View>
        {!user.employee && !user.master ? null : (
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.containerButton}
              onPress={handleSaveCheckList}
            >
              <Text style={styles.containerButtonText}>SALVAR</Text>
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </>
  );
}

export default Checklist;
