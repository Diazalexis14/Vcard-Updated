import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, Linking, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  const handleAddressPress = () => {
    Linking.openURL('https://www.google.com/maps/search/?api=1&query=Global+Reciprocal+Colleges');
  };
  
  const handleCalendarPress = () => {
    const eventData = {
      title: 'Appointment',
      startDate: new Date('2023-06-01T14:00:00'),
      endDate: new Date('2023-06-01T15:00:00'),
    };

    const eventUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventData.title}&dates=${eventData.startDate.toISOString().replace(/[-:]/g, '')}/${eventData.endDate.toISOString().replace(/[-:]/g, '')}&location=Global+Reciprocal+Colleges&details=Appointment+at+Global+Reciprocal+Colleges`;

    Linking.openURL(eventUrl);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (

    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxgYGBgYGB4aGxoZFhgaHR4aGxoYHSggGB0lGxYaIjEiJSkrLi4uHR8zODMtNygtLisBCgoKDg0OGxAQGy0mICYtMi0rLy0tLi8vMi0tLS0tLy0rMC0tLi0tLS8tLS0uLS0tLS8tLS0tLS0tLS0tLS0tL//AABEIAPsAyQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAQIHAAj/xABJEAABAgQDBQUEBwUGBAcBAAABAhEAAyExBBJBBSJRYXEGEzKBkUKhsfAUI1JiwdHhBxWCkvEzQ1NyotJUc5OyFyVElLPC4hb/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QAMhEAAQQABAIIBQQDAAAAAAAAAQACAxEEEiExQVEFEyJhcYGRoRSxwdHwFSNC8TJS4f/aAAwDAQACEQMRAD8AToQki/OJBK5gxOqaQwePKJN2PlHv8xXhC8rEteVqvypGs+eTRk00aCUIAslvOJUq0IHrA8wu6Qs4BukCFn7CT0DR4iYPu9Q3x0hnMYDwpNqhVfSBzPpT8Y4PvYLhJewWcFMILlmTQcOUW/s9OSmaWAcpO6lteJ06xTMPMYsolr3hrsfaCZalFsyilgSOEKYuIvaQFSyyQSDgugScKvMkZny+IdYIxMku7EcxVormye0SalZKTQOWqOMH7a7QpRLJQcyiKD8YwnQS9YG0tmLFYfqjZo8r9En7X4tIR3SQ5UwqNHqT5Qp2RLypzjeUzO1SWYAcBSF+KxKpindTvaref5wQMZ3csJR4rqUdY2WQFkYYN+KxJnOkN7ElWbF4OVLw4C1iXMUl8zOQbMOLP5wy2PtQJTJklWZWUgFgKCzgWpTyilYR5y094rMXSEvYFRAHvaOgbM7OpluSXW9FagUp7vfGbi2sjFSGzutPAiaST9hoAAAPz8yjZqhreIZaUZqa8YM+ggF9YgnYcBywJ0jOa4bBbckbx2iAkO09jgrdBAFX/QcIzLTKSyStRapAYOeesEztnKV4puV9E/LxFN2WhIGebblDgkBAa53osOSBzXl7WAeJHytGSsFIJcSxSrmvxMMJUlCQ6AEvUsIrcvFykECXmWYkxe01pFQK2Y/jA3QPcas+aYjx8ETScovuH1CsM7E0oR6wqx2OoxUAesVlc6Yss5PvgecQ7A5m1hiPBAHUpHEdMvkBytoeK3xs/MrxEiF2JxYTdyeAqf0ieYg0oWrWz/nDPYMyWlTHNugnKkEi1cwseV6w+SI2XV0suFgkkAcd1VVYqYt8rJF2Z1NxYQF3kz7Q/k/SL9tPGSFJUEhRWwb2WJNnHBukJu85/CDRYnMP8KTUj2xOygA/ngk8vIf6RuWFgDGEJ/KJUCGiUNxWEh7xtkiRMxOteUSyyFCo9KesCLiEMuIQGUB3FD7owZHBrwZMk0o8aGUYsHqwkQZQ94Lw0pOsZSg8IOwOGzCIkkoKskmihThk5X3Sb1D6xot1HU8If4bYaixBHrWHeD2GlNVqBHAiEH4xjONo0GEnmOg05nRU3A7PMwtWLPgOzajLY5UvctvAdekOJJkSiACkGCJ80lPiYEGtvQQhPjZHmm6BbGG6NiaC6V2Y8gVDhsLIlEIQEpyJZhdjxPWrmJcZthCEgjefQGsB4KYhSSEpUwuSKq5ku5iFGGkqfMEg6bzHpWFcoJt9lOnEPDKgyi/REYfbiVmu63ExIcclf9m6m9P1iD9ySWonzzEwwwuDSnwxzzENW2ugGMd2ZSPEboeZ3hDsByEL1bEVMLzVluUWEIA1rEa1JflFWyuH+KNNgY311hvuv50lq9iylJAAYDhT+sLtp7IQzS0KJ1OagFbE6wfjNqpSrUtomsA43tEQGElTc4PEJrBCzsScBlc00DtoL9OSU4bAaGmYXNPT9Ym2bh5UvMZgQeBU6iw5WhdjdtzFHwM1oVzMfNJrGoIJHjtGr71hsc1jrYLrn9lY9qYqXNABzUs26n0geRiEISyUtV3Bq4hAJ0w8fSCZGFmKDlSgNS0E+HaxtE6Kj3vc4vcRaYr2gAGShI61gP6dyR6fpBeE2Tm4+dPifwif/wDnZX/EJ90DMkTdPuuZC54v7KvIRG2SJUojcJh4uQi5QZYklpOkShMTIaKFyo56hyltY8ZJareZido1EuKZlTOtO4fX8YkCbMTG/dxPIyjSKOeql9ovDzF0KlrA/wA1YfYfDAgElRHM/nCaSmQpsyi/IEv5CCFrTLBEtRLhy4sIzpRmNDQ+C1cJJ1Qzvojx19F7FYhAmUIYcq+rXiaXOTMUUurL1vyiLDTkMkUStRKVOGKRoQ4Z4sErESUMhDFXBLP1OggEjsmgBv8ANU/g4DMS5zwG3qPHhuoZGAQKMT1J+TEiMJLB8I/ltE2K2mmX4n6AP77QMdrKPglKV/EBC1vdr9VskYWI5bFjgBZ9AjkJAFj6RuVH7JhWdpztZOXmVj8oHxeJmEf2yEcfl44QuJ1r5/JS7HxNb2QT5V86TDEYmWmhvrAc2bLXwbg/6xXMVJq5mpV5k/hAxlJ+0/lDzMI2rzH0Xn5+mZCSC0VysJrjcbKRRKQSONR6WhLicQpZcmNlI4RJh2FVISocCT+BhxjGxi9ysh85mdRoD29kHkUp7lrkC3XhGyJCCKrI8oM2hjVrAScqUJslAYQEtA5wVjnEa6Ln5Guphsd4pZXKlixUfnpHkzeKlMLCB1KEaGZBMlqlEoqdNpTMOpeBO/Py0YMyI+8MWEdK7QqYNrThNmFS1kJzBRqkNV2D2BF9LmkR7H2jNM1KzMWtwo5SaZxuhKUjkbceEe2oJyZqg1ahnAIqDVSRmI3bGlONCHsWeH7wpTmSAGY3OqqsSzjQB3dy0YRlcH0SdCvaiBjoiQ0ajhS6klMbpTAuxMb38pMxmNlDgeXEPR+RhiEcHjWDwRYXhZ2ujeWO3CjiDEYtCA6lN5E/C0HdyWtCjGSZaVZysJLhJz7orUVNCaN8gRR8oaNUfB4UzuogozCzMzvcE+lD+MGy52WwT5h4E2ThkBSjvKTmTUFw5AZLjllr5vV4eKwycxLHkBQDyLuID17XcEbEYB8T7BCXZzpToAPhE+DKgrwgvxf8IbyJCTRQPQFvmkbHByRQJDvYqd/i/pA3Yhu1K8fR0mj8w80VhsbKoFKQ9GA4wacUGZKT6fnC1bJYjKGtuGj+YgWaon21EF6JASL8i8JdWHFb/wAU6JtaHwr6pucen2igebmI5u1UMWqfIe9TQiTgiS6d3rURLLwlC4CuBCW97QTqGDilf1LFO0DQO/8APshsftBSybNw8XvgLvj06AD4Q1Ts9OVyQD95m9HcxNIwiQXBBDafp+MNCWNooBZLsJiZn5nu3SAmPJS+rRD2q2+nDKACJSlZSWUpRUW4gMkeZ/Ip9ndvsywmZIlpRQlSWszulzetuTWLxQ41o0pMM6AmcM2YUrOZKUjeKCepPuEDLB+yR5Q7TjEEAgLIIcboF9a1ERT8VmomW38R/O8EZK4617pebBsbpmquFG776tJFpMQqRyhucOpmyAecDqw55Q02UJExObwSwyekY+jc4PVKjQogvWKuZwQgkJj3dDgPQQQoRo0TmKgPKg2vgUqlKVYtUpBKgzjMGBcpd2INtIo83Byk5UpWhUwsiYahZXuq8FCPCqr+yNSW6VLsQQDQ0Ori0cy2liJQnIShYpMSgMySEqKQXzgUBy2JAANgCIx8YKda9Z0FIXxlp4fmqedl8VJwyVzJ04gFIIBzknK4dIKQSGClcncUrFl2P2mwk9YQkrBKglLpNSUBVcoISN5qmpB0jmGM2dNM/vQClCDkSqhypRupAejEBVGrzeGfZ1a0nvCtSGT4gKgMAWIJWlSgFEsKsoNcQs3EPbTeC0J+jYJSZHakrsaJctNVEAcTT4xVP2g9mO+Hey23U7wyubsSK+IA06DhBmKnd4ZQlk5VhLFmpkJBYtqFUI48oa7SwjoSCVVmS0Egsd6aio0qwAOhIg0hzDdI4Vhhe2gFTv2dLlHE70xXeEEZagZgGVmBVld5eUUdwTYgnpmJMuUkrWco4t8GqTyEch7M4ZWHx3eYgJz/AFhQJiSpcxlEgywDuLIIJKnZwQHMWHaPaxcwKRMR3bAkBJzKLskChrUl7F6NeANPNac7MxsCyr59WWJtQ8L8XrG/eS9PcISdnMehUkAkZkt4iASFHdLPqaCHJVwaCEJCyDsPRYUsaAxocUn55RsVHSNwRrE6KlOOxryUBmPqfKkZQiJaGNSecTajJxJtbdwnVzGwSHoDEXec49m5xFFWDmjYLn37RdkhA7zIFBasxXMKCQo5qJJWFgBxRmDAcG53MKRVRHAPQA8qgnlfhyHR/wBoOMn99LCZ0vIgE5AnfTmDVUUm7aK8ooU5ClIGUBDvmPNmcPR9L0BvpCMgty2o+00IrZ3a7EYZIyErlgqGUoSpNSTVjme+8/LQCLD2W7ZLmYgIxU6XKTlKmyJddBuulJtcl9DFNnZHSO6Kznul2SMrh6EEsmx0BtFj7D7PlqVLnZCClTEJUHQpRYOlPh13ncMLZiIvGXWACqTQxZS5wHjxXUpyhoxpAk1J4RKcRAeKxoSwP9GGsao7O68o5gmPZ18FDOTxgdSY3mYtJAUCGLt5O/uBgabPDO9PzLfGGGyCt0jJhX3WU8tllRiLOIFm7QluQZiQQnMQ9QKVIvqIX/vuV9o/yq/2xfrY/wDYKgwM3+p9EentPhgzzGJ5HQPHOu0EgTMRNWmYlYUpS7MztQByxISK0e4GkJBjSoLADhiXDkppblZn0eNEYtSiorJNBvNa1/4QY87JiJZaz1oveYPoyLCud1ZOvNWfZW0lqRmVLfu5IAUSQMjNvMd8kkc6i94iO0wlOZkFQCUJSQplOzDgWCVFzyFAYiwm3piJKsMrOqXlG6U2GUVNKAlKGPLnEk/BSJjIP1WXMpwl3SQzmhqCk2gTpaOtrUjwwyE6Xe16q2bL7XS5axMmqUp0BRyvUrCX5SikBfLo5JtOM7WYdUsZVpUsLQoJz5QQlSVHe9ndBqeb0rHGxs4FWQYhPdkHeU4O6CLeTO9i9dTiUAulRWjKQzZczhiBmKSnxChBJAd9IJ8SQ1ZzujSZA7l4Kwdq8QFrTiZSyqeCJmVMwFJy7x3QN0MnkDvUc0xjUjuZq0lWYTZQSLlCZzWKmVMOWWpIowc2eFEzeKAhKU5QUlRzJKqSyCSzZnCidC/lG2F2UtRCVTJlA5zbpCRLAqSdSXHAcYXOJrchPHBlx7I07ipMZMmylJHeLQuWk0em79nM1QQK0uNL3Ts122mTDLlTpe8pwZjgWBbMkFntwvZ4rOB2HNUxVOUUVzKSXJAskjLVTBtWbRxFj2LseXKBKQpYd983IqTloAQwDtTjcR36pFHuCfBLydDvmFWB4q0fvZJUyS5qSADQJDlR0YCrxmTteWoAiYgu4cHg9x5RTu0OzpkkqmypswS1JUMoLnKtKqAl90mjHT3VJHaCck1ANSfABUhrJZqRqMxAkbmZRCwX9F9WcrnkHwVv7X7VmKnSlSFrKQCAUANmBAodWJq7AEa6OJ3aUhOUqyKzBImKQwJUpIDI4VIc1sY5zh+0SU07gF7kKUC1KUI4QUvbWHWx3pSn+8UtqAGUzgkOIFnlDz2dPFPnDROjaC7Udy6Biu0yRKBChnJCHLBIWVN7RHUDnyaFP72x+d+8QwGbKbEZju7qNDR3DhvJHNxWGmgAThQksVBXiDENkBFKdIPwKUhRJUpYNqFNOZCt4CjUegveE558VlBDdeX9J3C4PAsJBdfInT5ovauOmT0kTEyXJSM6ZZz0rUvwUaDnFe2ZhxlmSZjZQCgJZIABZgMwCi6ammvq6nyM3hWCHcEhaVuQ1xLKWrSMS8GgKUo5CpTbxnhJZMsJGYKUlzupdvwEKtxM7bMjb5aFPuw2GIqN1DxCW7XwhWkgZUlU4OzFmzFycoBIGvL0xs7CdwsLlrOZ2olt3Lmq9/C76U4QdM2etYO4TU+FSVOM2mQmtdeWkR4nAYlQZUvIN/L4gRoCNE2Zn1BgMmLlFa15UrxYSGu0bHem2E7SzZiiyUN8GTpxOZga8BeFu1dtFs+Y0JO6W4MKUJt6QCcMpKQkBQISas1qfxFuv5q8bhlBkhQHEEfzML+XI+cHETSVbzSmHBYSFxLWDMmMnbLgJzkM5Z6O5sNaj5tA+I2kctCQXS9SOf4i4gPGyXolJABGrWBc3cvX5EC43FBQIBZyDZgBRIqTowoLUjhbiDZ9dk0GQjZo5+aOxGOTmCi1WDtUAocpGrWH43ff98c/ef8AbFcUhTlwTXg1EpNDwJiPu532D6j8oKGV/L3VCIz/AB9lLLxwSkK8CHomXQqT4QT7ieL+UaTsakgLotQ1pQILAV1Lk2ege7wlVNJYKY6UuG09RBcmZLElb5cxNAQRrSvNvlocyALPL3FNJ+LSs51TCahlOQyWLBgAwaDpR8W+FZvE5SAxVobtlDeRppCUokMSliqjKK6BwasrnxrSzwf2dyTGK5iAUggBagKjeKwCprUFRraKubTdF2rjqms/CKWFLSmSmWzFai4cUFKuGJsDUa2gSfiMKClKZyFlmOWUQxYihS70qS5fXmoxmIK1GWyEpqAEkl94HeylQuAWr50iCXJYbu87vlBc8q10dvjEdXpqVZppXDZ+0MEgoyd4sMTmJZlAhQGRZAIPEJVVqOBBmM7WSEl0omTVWyhkp3GuXJUxIYgMXNdIR7G7OzplSO5DFlTEDM4BokEkMSQDQEEtUgw9xux0slG4RmCEgoBXNWzkEZdxiFBkkBr2hR7Ys4BJPmmmuflsaKu4ntTjJk0FJ7sEFkISAACb1qs8zzoKxIvtZjAnImaoCoogZranI5qX4xcdldiggArkyitVS61hI5BIegH6vFikbJQhJSESUjgJbv8AzQvJjIAaa0H0RWYeU6ucuRzNtbQmAJ76cRYpRp0CA5DC/WAcRsjGeIonM91BSf8AvZo7n9BCTuMCxLJSE0bg5+RA+NwoCSTnD6khI6tpwhjDY9p7IbSTxOFI7QNnwXDfoM4XSAfvX90ZElX2g/IH8THQ9rYCWSah+D+6l4rWJwVwU04t8tGsx9rNceCR5Tqo+n9Y3lYiYjwqUP8AKW+EETMI1q8ohXJHMQXMoDQi5faCen2n/wAyQfeQ8HSe1kwUUhJ6Ok+4t7oSLSxrUcRGO7B0iCQpDQrOjtPLUN9JHkhf/cx+MTydsyT4ZgTyZaD/AKC0VD6PwIjHcqGkUoKQK2V9lbXX7GIWeQnZum6Xj03auIAZS3HBctChXqI58x5x5E9afCojoW+EBfCx24Hoite8bEq9HbkwV7vDkjXumPG4MQzNuON7DSi/2VFBfqKj1iojak0e0/UA+8h4ydrHVCfJx+Jhc4Vh1pGZPI3Yqxo2jh/awq9f75SgCXLhzxJj307Af8JP/wCqv/fFb/eKDdKgeoPxaNP3gn73oPziPhW9/qVb4mTu9Ak6VsCGFWqRUMdDpGuQ8DDLC7NzlAChvZgolqFNwA9SE1qQDxi09nOy5SpM2YoqIdkpLKclgp1eENxD1euhpJGsFlQxpcaCRYDY2YEzQZWUEkFJzGtkpUwcaknWgJuzw2BClBUrDZl0IQCpcvK7VUF7xq9zpRne8yNni2R01OVI3auxUSN6j+pFBZxIwgAAQyQCOernq+90JN9UJMaAnGYYqpbC7GgIKpwSVkupmWoAm31gyAUqKk21paMLsWTLUpeUKKnoRusoAFkBICQUoSLUNqQRPmnLTe1FaZXD1FbHjo+sJe0HaJEtMwKzOlLEVDlZ8CVOUkHKHYmgA5wqXSzGr9EWmRhSY7aIyoWoHK4SiUwdSwQAlIFCzAsHAGUuAHhvsDZakjvJ39qoGiSwlockISxqzl1XML9g4TMUYiYkZ8pCE1yoSovRKtSMrqryYFosaFOwq/BuHSx5Qrip2j9tnn9keCEntu8lJQBy1eFT+sSpVq/v/LziMySfEGerktb4xtJoGctyBI+FPOkKMaSUy6qUG0FWIYh9STW4LAUIbVvyBnLqcw4itWH4dBBe18RLyM6TUOHdw9QeFDwgfF4gFCGTmCXBIbUHU2oNKUPBo0sK0nWkhOaFKvbQRlLixFQOXwNHb4wBjMGlQ0Jvz8/TWLNi0BaCCPhQ1q9y1X5QjXLALLGvAGofmGr86RuROzBYUzMpVenYJtG4/lApwfzre79Ys8zDhTkM9fjAM6QwokBjXj8WbpBwUJV2fs9QdvS/zaBVy0i4/GLIkD5o1/Kvy8RT5QNSkej2+AibRBsq6JeqeHM/NIwSR7NOQ+RDKdhKvRqWFWcu3k8DKBevPy9/zSJU0hTXT1b4PEBkCv8AWvWD5mHoPeeDi3KxPzQWZKId3uRwL10+esQpCAXKPSIVi9B86QYqI1jgaRCuCglc6RE8HEH55itujRD3Z+SIhWtdR2TstEkAJAe+agVmLVdI3aGh6O8MJBShLJCQKuACp8ygSCwLF6mnFhcgeVYZQU0qlTOCatS5DAUOmsEyyALgVqXALB60FelLGPOuc4k2bW5laGihSnIIUFEkeyEvQ2vQnMwd3pW1YlQcxzKfKk0QDcKdswAzVDFnsFaBiPlUcoCGNcwFWBSTvEirhqU8V3Bf03EoQnPRbpJzBiLAsDoGLvqEg6GJbHtzKG9+h5KLa2NCAVkkJSpszJTkqmxKSVC55sKxps3ZnfqTOUVy5ZWoplKWVFSluo5wpwCCkkZXDa6CDYWDVjGnTgtKELJly13LAjMsKJtmIHmetyAFCw3dScrUIo3X4xaeURDq2b8TyVYYi/tu2WZWEAqSQX1P5j5rDGUMiaAOeJ+W98ArGUuQEk20+HTV4hm7QB3R0vb0jLADStA9oI1JUXe9+A+dYFM1RSasBamawD2B1J42iOUoB6qN6E8eQDaaxJKlins6ljqb6tcn1EHa4DUoT7KBmPUKUrIwZTVYnQqZOjevKGuBlhcooylIb2WSBltQHRgK8K8IWYlJMwCiWvuh7WehAq/CrCsNcGQlYc0IFOVBWl/zMN5w0BLBua0p+jqQ1HBV4nOguxDkkG4JtAe0cMFJcCurluevnrD7as2rFWZBqAWtS1Kgh/mwChRq5Slw7gMasCKU4dLRoRvIopCVjToqwlgWIy87s3x98bKlhYdN68h+nu+MGbQwg3tRqT+H51gJLp3qs7OKhxz6e7rGgCCLWcWlqXzsPy3vfXhwo/8ASBiNCOVbD4aeX4OpoBLPXUcXerN10/UbESvkAa9Kx2ZTSXgEWLOLaF+Vz1iHEYQH5EF931blf487R4oNS3R+Hv1McSrBJZuDUHp5Uf19Pz1gJWYGr04lm18r++LQEA38xXz9IFxmz6szs4/QUtX+sdmUqsLQDenO4ty6e/lAsySdATb594+EOMTgmBp1re9dPjC2dJa/nammljT+sTasEEVHh6jh8OsRd8Ps+8wVOls7ixr625H9aQLkiFZdXkroXoNWBUW1ABfNYVar2iSSsswC3DkkULs1A1q0FRTkIpuK7ZJQCmSlyfbs5fxEEAE2J3bi+sIMb2mxEyhWwsws3Sw8gIzY8G7+VD3T0mKDj2QfkuoT9pS5QKVTAWej73ia3ryqekVQ9oEqmvPWESReX/aLWx5L3XATQlhUWJiiTJqlXUT1LxpDMeFjZfE80F0z3b1XKl1mX+0fBIDJlzm4BKBT+aNv/EzCKoUTx/Cg/wD3jkcegX6fBy9yjfFy8/Zdow3bfZ6v74oJ+0hdOe6CIdYPbGEmH6vESlqYADOM3VjW7WtHz8TGIE7oqI7E/NXbjnjcBfSsrdY5fxv83/WC6EMSx4FVxrS7Uj5wwG28RIbuZ8xDaJUQPS0W3Yn7TcRKATOlpmpepDpWTxKqhXpCsnRkjdWkH2RhjWO3FLq+ITV0jUA8KC/XSzxvLR0BrSotY1ZwOf5xWdidr8NPypM5SFqchM1IQS5YALKjm3gda8mixKvqbmtdCNCAfMmFnNezsuRBkd2mlS7aX3iErFCOJ+0xHQeR60MBSVBwxqPVxqHtR+EGhO6EnXdDgB2rd+A0FKVEArweQ0cXdjo5oGpp7jGjC4ZQElIw3YW6kAvmFQOWtWdKg+tuN4VYrDpdwTmoQ4cAczc1Fm84f/RVABWVqAi1jof6/CBMfJo4BrU1bSwD2F34aVhmKQA0Cl5YyRZVdEvl8L00u1bRibKI1LfNDS35QXiZZSXcta134FV/KlPONVJJbjf9Ov5w5uLSNkGigFIA0/D0LRBMl1oxd6M/T4E/1hizm7tZ/h7ucCTE68Hpo1RbgaRVWQs9CQl8xJ1SwDULDNrrpTnApnkvvEHQdX0Fhp5m8EzBqL8mPHQ+dICVXSpq3AsWPy+kQpBQmIVwqGvYF+HO8L58upAGlHeteHA8DyhiqYwIbW51AuOFecBrZmzEDyNOL0N9OpjlYJXiZAL8Eu1XtfTm9Yi7s/ZX6fpBswmrAlmL+KzC1Wu0Q9wPu+o/KLKwVbj0ej0cir0ej0ejlyzHoml4daqpQojkCfhBUnZU06IT/wAyZLR7pihHKLAS6Mw6ldnZirzcKnripP4LMGyexq1FhisF/wC5Qfg8VMjRuVYa7Ksx4R0CX+zNYRnmYmSE6qBGQfxrKR7jBMjsfs1Ld5j5JfTvkkXZwUgcDrAfiouBvwBKggjgqOjClcvMkA1IOhBHPWkNNgdr8ThGSFFcsXlzKpA+7qk3tTkYtqOzcmWHw8+WtBvlWmYk9Urb/SsGEO2ezwbOUsDRM2Uc8ongUllyjXwlzFBLG+2nUfnBEYHN1Fgro3Y/tZJxQIlkJXR5SmDAMN2tQ4o1Q4tRrGjEJQpygqFnccK0evv05t87q2fPkqEyWSWLpmSySza0qPOOl9jO2YxLYfEgCf7KjQTeRBoFegLU4QB+HAtzNQjiUnR266vg9ryFJZDUIBSRlY6XFNIVbWKSVDKkrLlOrO7MS2aurU0eEqxfxdaFraefDjTWDcOoKB1AJL0qWo4rTy9IGIg2nA7KL3CU4mUGLoDj2XsTelSLVbg3UAKYFyRTWj1pQiunOkO8VISp1JBNPtcWYjTW3KEmMQxAKn1qA2oukMzEcKAeenGQ4LPeMpWswA1djqbuGswb8b8xApmOa3bUWvoTWlKwQmZbMxBIcP1LV58jwiGaA7gEBnppU8gPyf0IQgAoKclydejkMRS2nTjAcwgEGxFX9DrXzYwx717sKmjsQNQOlWfTrA05L8gSwLOwtYU/qSGaKq4SXFB9Qf1evDU2f3wGpJ0exHuNPhDaehqnKoCpL8g/46cTC2bLD1Z/c50rR3dtKXiFcIOhoTUlvNzYub68GesQZPuH0P5QTiR7qcbanrGncp/xEeqv9sSrBViJJYDhyQNSA59CQ/rGgTDTZstYIMsqdRUMqN5RyAKG4CCUkkX4G7NFgLV3OoKbC7GTMLSpomGu4N2Z5IWwWfuoUTygjZXZ9WJKhJQBk8RmTACmrVQBmuGoDpWLGnBYNRMjESpkuYiWlSp0tIQAMmZazLKEpUgLZAOclVMoqIC2/h52HWmcJjz5YSuXOSD9dKfLmVmDlaSySFByCQqqS8uaQEv1lmueynl9hl07zEYdI0/tF/8AewjdXZXDJovaUlI5SZb+pmPCLbOMzqE5KUET0jxjN3a0UWlLuBViH0Iiz9nuzE9WH+kJnoSSkqCQJYDILMzUJ6a8YsyNztkKWXqmhzz7f2tsN2Jw6w8vGd7puSZaqmjMFGug5xXtvrwmGUqXJIxMxiCtUuWmWgn7IQD3ihWr5RwVcPu2vaHu5SZUpkrUgJGVCUtLIZSizb8w1tRDD2y9Clq7sZvbuD9lxoD7TEF9Ka2XZmc7Mdk01oDddSopq1zFVdR4NYcgLCGeyOzkyecoXKQfvzpSfcpYV7oP2N2TxWJCZmRQlzCtlM4dAJL14sCVGmZ6w+PYjDZAVYljmXvZ0CXkSqWAcxGUFQMy6mfLzdlsZPBVkkDW7gbd++iAndiMbhx3hkibLa6FF21yqRvHyzAaiFYxE7DKM/DrUZZYLSsAs7sianwrSasqx+6QQLEvY2P2WgYnDTj3WZiE1Sq+8pDqQuWwScxtnSLhWV6pEvaElc9MnucSlOXESKgKTMtMSFVyLI6pUEl3qYdCOIQBiHNFg5hxr6hK8FgZOLQFyT3E4g95IzZgW9pH2w3su4pYDerm3dgzEstCwpIIZYPhWT4VaoU/FrcXhbLCkzTKZWdJ3VIG8yQ4JQL7ofiIssntRKVKUcSkLmgMmagEd8AH7qeBcmoC6sakPU5zo5I3W3XuWg2RpABVr7HbWVi8MO9STMlkyl0fMqjHKC7kFnpZWkP5Sx4BlIFaOS7CrcN2/wDWKZ2FxCDPxnc+BXczEvQjvJaiQWLPmIB5iLiJ+QgsAWDlnvUpAo5qeT01MVIqwB5e/wBUS7okrdAZ0FiW3Qwq/IF6k+/hA2MlKZzlVckEhwKatmIfW7EVeoYCZR8ysvDgDWuUsBTNU0MBYma4JCBSgUCpy6QWJAYuFGhPGjReJ5JQ5GgBJZikZTmBSSRfXS50ZPuMaoXvVWwDF2GblR+YcvxpaGK0KNQoKdvFvNoCWelbgGoqLOFjMKhIYFalsdwAkVDFlqDMHGr31DwxnGyVyHdLcaohW8alnGVL1bRNjW3vOgpZWoFeVerMRpBBXcJJD6OMxpVT0zOQ2jU4wAlBBAdibOqhbmSwLi7v+NiqgqZOFz5hmSFhJIckZmcsFEgPwHH3JVgAtQjNaytwXdXmOvlDJcw1o6nDFV6aMzCvA8ecDTU5m3nUOILKSKBi70HsmlONIhEFJcZGaiaktRwC9gxJbUCvCl3jf91zv8Gb/IfyiVSWB0sQaAlnFFAvc8D7oH7qbxPrL/OJUgqHsxtqThwt8OVzFgBOW9BZy5S5ru8rsIteD7RYgoC5UhCCVggJlTCQlThyqWoFSlKfQW1rFbw2GMspCEgKoSQzgNckiniPy0Gnb83DBCJUxRBIJtRKHqCxYBzVjd41A0xiifT6pR+GMzTKAKvcneuQKs+N2DLxaUmdLXh5y5aZjiueUaJUU0zBwkMoApJTephRtrDyRIPc5zLQSM60hOZS80uZ4jnmKOZJUqwKUgNQA/Y+15s/FSc6iciFJD5XITKWA6koS7c+AMKe1gw8tE9clalLXNyLBQEpBCio5Sz+yNdekWlaMmY7pCMuEnVi60I121pUqXMfDlLeCckj+NCgf/jTFw7NYad3ZBUUy1ql6/aLPl4N8IpkofVAfbmD0QP/ANn0i2bLVOCJhUVBIkT8rksCJCyGBpwaEY3VE+t60WpM0Pc1prfj3ckinPi8aAA3eLAA+ynRPRKQEjkkR0TYfZyR9ISe5QtKbJW5diwJJLl1F735RRuzKP8AzJIdqzWP8CyI6rsBBzrq5KQE9WLM3NoewMTTG41tosfpjEyMe1rXVY+ZpB7d2iayUFpQNhRKubCjUoODauYQ7T2yoSZGGKkdyVLWQQLnMA6uGdIg7aclRyFynKoEtqGNDyJ5aRWNsYJUxEuShLAKWCokMlJmZk9SATw/I0wrYInRbozFI17gLArxB4d/FWfsntEyZyJQJEuYpgHolavCtP2S5ALXB4hJC+QqZhtssta1onHuyVqKlGVPoASovuKII/yCMbGwJ76UhJKnmJJJLsMwJP3QACeXviTtDPEza0pv7tUsq5ZCZh9AYo+MFuqFE/LLodC035VRVP2vPMnaAWKFE0EtyXb+WkWbtvKw02UqaJbTWP1iSE5in7SRRVNb1imbSm9/iyR7cz3KVFp7UZRJmM4Jq3ClPVoxZmgyB3Fbsbi2NrTyC1/ZDiQnETUEgZpQIexKVpYf6jHScRLILBlOS4Tdno5u16UF258I2LgDPnolJZ1OQ5YHKkqZxZ2Z+cXPZ3aleGPcYoTJktPsmk1HAO7TUUvep6EEkX7mYeYTXWDLlXS5KlMAfZLEMBQsSKAFLgUDc2DUGxSxLU0sDM44VB3gHHisAxa+rxpgsaJiDNkrQpCmYg2QN0Cp3SNXtWjvBSZfeUUM2U+TKZ24MRbQkVF4W6wNN1pxRMhdolZlsFJBCE0IS+YqBe4VU0BLGhY0rAuJC8xJlpW7l/Dl3iRlbdq55EsYaTZ0sBiVtQJdRDN4lUNUgtQXYQCnPlVkTOKlVLmwOUDdbo7FrnowJLF0lyyjVpItLkt4hwoAAzOpvEKB7X4uNcRh1+zunKTQhTZqvRRBArUUoYLWoeEgAtlABIe5YlW6mjl2awpGs7dIIBNMrFglJoHDGho+mlS9D5tUDKksxAABLEPVINL300bhSPLnBmAFdEhmIb1bepXjEyZQIGUA0cG4atBxcZYGmSVBqHLUBhozhiALa9I4i1Zp0pQTZbvQi9QK2bzFRxueBgdxwHoIYmZmIExKqgVZiyhdiSkm+lXuNAe7H+EfUf7Yi1YBS4qYtwHCaOA+aoFApxvOaMbcokRsxG6tVVlNSpmAIsAzJvw1MFnASJ04ZZ6U6qf33I9Iez8ThpRcAzV3AYZerMwHXNHqTEAdl5+bGvfWputqqhyHBY7P7JnS5UycmXmmqTlQCQAASN5RJo5KfLi8c327ic5RKSyimhKSTnWTvKqTUlhSlHArDHtFt0qUVFWZZdmZkg6JIvqCr04hXKT9GR3iv7ZYIQnVAPtEaEjTQdaZOLn/AINK0cHhiP3HjXRES9jErSFEploRRQAU6jU0KhqT6NFpw2I+q7tXeHfJUpSUhPdkMpICVkq3XYHnFMwWysXORnQhakkmrsCRepIB8osOwJE/AgzMRLV9FWpKJyQpKmC3aYnKSy0EOONrGE2yUwtB3TMjA4gmrB0SbGZ8PPROUkhSVBMxP3pQCVVGiwCdL9DHWcFiZUtEuYiaDnYgJqyTUKJ4uRS41aKL2mwLKU47xORPeZD4kJA7vES+LIYH7uUm6ilNgcbMkIb+1ku6VJO8h6nmkcUmj2YvDWCxGTR3n4pDpHAjEtFbjbvH/F1XamAMx1y2UFVKRcH7v2g+gqLNqUE7Ys8Aq7mZl4lB97jy8zA+xO27nKRKU7sGTKqQAAt2NG9hVa1qX02z242kVMjES5SGbMFIDi/Eq1bj5w9JKALbRCz8PgntOV5oqwowisFJXOKFzZxDAIQohD0Z2o+qi1KB9efYvGqlS1zFqP0jEA/wylXVxBUd0DhBOL7WTe7aZiZs9R1WtYkj/LLJeYeoAhTsbZE7HzSSSEAuuYaknhzU3kB708Rig1m60sNgyHEnb7cB3KTsTggVrxKwSmUGTzmKFL3YOfSJe02OPdFBNz5u9R6Q42tjpOElplS2ypHmVG9rl7mKFj8aqarMbVYcHjLYS/tHbgtLKS5OOwUtRxsvKxICzUsKoIux+1HQtsbOk4oGVN3ZqahJAExPNNwtNbpJHOKZ2HSJKjOXRww5B3fzb0BizzNqJnqaYAtLkgWUkigKVOFJ6gi5hkQB/auik8RiS11DZU9sTs6a4JKFFjfKsA68DwNx0v0zs/t9OLkmZKIExNVSwRmSK0axRSjCtKPFexM1CldwpQmpWWGcjvEEO+bLRSRRlUPF4q+OwM3BTUzsOo0OleoI1B4WhWeHMK4p3C4kHUq2ftTxZTKlJScnerIWEk1SgAWe1qfq9Hw22J0oES8UvK3hJPuStx6RJt7bv0kyjkIyy1Z0guMyiSpSDcAgA1tbRyrxs3NlSpOUgAPlyktR1c2F4nDRFkQa7dFneHSW3ZPJPaqePGlCwz1QxcvV0EB97UNajwdM7aZvFKUAABuqSbvwSmm8aa8eKrHyQTm3VPbKQqgzG6GNSwdteMLlyXUauGfmWFwFAHX3HhDBjaSDSWbJYVol7bwyt1yHdzMBBDkFnF+pqPibLnoJzZkKSXcBYqasQQaGj+REUqZhyA7UcvdPENVwKgiPTQlIBZjobHdAsUnXpEGNSK4K3SpQUljMSlQcbyiN0FqKsGaza2qIh+kr+0PQxVkbQWgBlkg1yu4YtR7gsAPKG372HE/zGAliM06JmO0cyU+VBl5ksrNNTUNbdS5DaQo2j2hn4khBWuabJTvZRyCSSpQ6lqWivoIBBIcA1Fn5Q/w205QScgEoapFz53V5kw1LiZHpePCxR61+ea1kYZMj62aQqZcChSk8TopXACg56Le97yYVzVMLnUnkOZ4+cRbQxZmK5C35wJAQOJ3TG6sE/tESyUyxlSGAJoBwAFvfDHY3aqWAZU+V9TMBSvIdFasbtQ3oRFZ2fgJk5Yly0lSzYDlrDPHdlsXKQVrw6wgByoMoAcSUEsOscZQ05SR4KhhaRsrHsDF96DhAsLmScysMv/Fl1JlDUKAJWjhvp4CF0/ZiFkrlKMqZVwkbpuapSd3+EEfdEVmVNMtSVoLKSQQRcKSXBHMGG2J7SrWorMtAUouopoCdSE6E6tziXajkVUMIdY2KyvZmJJ8Mpb6vLf0JCvURujYuKGXdlIozlcp6kl/EVeg0gL9/TdGEZHaKeLFI/hEUPWcx7q4b3J1g+yjqefNf/K5fzIf4Qw2t2hlYeX3EgAUZg3+oi3ximzNszz/eEdKfCACXipjzG3m1DWu4qbET1TFOouT8sBDnBbKEtOechalkjLKykAc1qUwH+UPziTs/jsJh095MQubONgGSlA5KPtcwKesGYjtoP7rCSkl7rJmH0LARJLs1Aac1Z21BYMvETCCJaE8ASVGlNLmDJGxcUakrY0JCRLbk5q0B7P29j8VORKRMyZ1AHu0pSEp1USBYAnWGmxdhzJ8tU2cVzJYM2YCsqJySEG6XIGZa5fG0EGbmlHjKNaWuHEmSFIM6VLIuysynA1IuekQYjb+ETR5k1/E26D5l4qQSVMCkPZIFLm1L1MEbX2ScPOVIWreQE5iLAlAUR5O3lEFoBRmsF6laCch5kwbhB3JbFQKVkuCujEBq6xIdrqN3oCwVv3A+1W4f0iLZGF71eRiXBdgHATVxmUkacYgXISXyq6BQYn8HiwsBXOUkgo+QZa1BRyh0gZU/VsaOQbcYLk5klRExaQVFCXSJgyICgMzVoSwpziuNEkucpNlEdDEgqHR2mk9ZQClSUqALkpUUm4anI8oHxZITlym7qzJDuHsoaVgdWMWQQS4PIcQb9RGoxK2bMW68Q3wJjiVLWEIsS0KCmAc+HeCctahQVyoCIg+jffR/MIIws5CitU0JqBRmL2o1uMFd1h/sp/6iv9sVXXSXy9mTlWlTD/Cfi0ZRsucf7tXw+MWZE0mXIU9VIqeLKYe4NGm1FFMgkUNB5NEBUMp2VRWkgkG4oYkwhSFpzJzJcOl2fk+kbYtABIHGLnI2Hh/3QvFd39elSWXmVRyn2Xy68IuG5rRc9AFU9Ez61JcABQHAM/qzRacT2zVLQqXJSkLbKJiQU5WLUBUoKpZTg2itYCQlWdw7AkQvgRja92vBWB0TLZWETOUsKUQQgqDB3UFJu54Ew4k9mpZS5mqfhlHLrCns/wD2v8J/CHaJha/zT8oJSXleWlZkbCwyarK1a+MJDNwAf3wj2vPw5IEiVkAuoqUSo+ZYDyhptNZ+qS9FEBQ42vFZMcRRVogXakrfDysxZ2FyeA4xvMKGZIN7m5/AfNYiRYxjSK8UVeLc41jIjWJUpzsHaysOSUpSokpLKeoCVpIpai38hF12N2yTKwi5LFIEgpISyinNPQk0UwJyhJvrHM0wTJQHiHGvVDdC12qfbBmom43DIKUlKp8sF0scoWNAS1Osa7cxcubisXOJNZswpSPaBWQAeAZrR7s3KCcdhmDfXI+MIZ1FrHNQ95iokzPPh9V3VAClb8b21XIWU4JEvDkUVNRLTmXugMAoEISC7NWtTFfxO21ziTPSmYT7eUJWOikgP0LwFixRPMCIEXi92oZG0NBpT4nD5SzvQFJa4NoGhxtT/wBP/wAoH/WuI8ZJSiYQkMOF9H1itqzXaWlbxuw5/GCMagPYDoG+EWPA4OX+75k3IO8Bopqio1iSaXOdVJDitjTUJSpSQAoOHIB9CaQF3avkiMKjEcrAlf/Z' }}
        style={styles.coverImage}
      />

      {/* Profile Picture */}
      <Image
        source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/441584545_366411269738811_6300955883717754442_n.jpg?stp=dst-jpg_s206x206&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHKSopdD-RPUqlFB8Sk8x2v3-_Lb-n9zNzf78tv6f3M3KTLn2VD-Cpu-haCXLcYJaPZd7u2d2xKq5i1URHmphD6&_nc_ohc=zL7Q8eV-0UoQ7kNvgGm0nvd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGrMEmrV4pXHJWhohNunoERv8L4MuHiubwZAH2an_2Drg&oe=666AE0B7' }}
        style={styles.profileImage}
      />

      {/* Name */}
      <Text style={styles.nameText}>ALEXIS DIAZ</Text>

      <View style={styles.bioBox}>
      <Text style={styles.bioText}>I am student in Global Reciprocal College at Grace park Caloocan city. My hobby is driving motorcycle and take a long ride, also this is my way of releaving stress. I want a nature seeing too.</Text>
      </View>

      {/* Social */}
      <View style={styles.hobbies}>
  <View style={styles.imageContainer}>
    <Text style={styles.sectionTitle}>MOTO SHOOT</Text>
    <Image
      source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/438271692_767431772163548_3436415266645437429_n.jpg?stp=dst-jpg_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEerQeB-dh8jUoVW3tDhpmJl3CeWk5jI1iXcJ5aTmMjWNTGjdiU1JYEXoUmsL7xbp_AQ6B7ngyiDn-fGGMhN5iw&_nc_ohc=ZrK3jS2rVskQ7kNvgFXSyGd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QF6DsVu3B4u574IWF4zVMLG2eQR-tWmnJVxjxG2DOBN0Q&oe=666AD206' }}
      style={styles.picture}
    />
    
  </View>
  
  <View style={styles.imageContainer}>
    <Image
      source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/438270817_1102418794162883_5432036424263981655_n.jpg?stp=dst-jpg_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHPpinr6aHzl97d6pbOJqz2BOUYJPkzc64E5Rgk-TNzrmig1NJk5okk-MBhi630CwIygGbRd5fL4FzP-lDElKh-&_nc_ohc=PRXFKHEwoPAQ7kNvgFA7AqV&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGQIQjc7mfCZfOghg0Tf4hmGd6XgUi3BU1c37Mfu5_s5Q&oe=666AD818' }}
      style={styles.picture}
    />
    
  </View>
  
  <View style={styles.imageContainer}>
    <Image
      source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/441526610_442248761835585_6818935146126315599_n.jpg?stp=dst-jpg_s206x206&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGo4RaMwGc9HcKmrW3eTXcJ2_drz7Hke97b92vPseR73nDfjdMtTzhC9Ext1CXBB8tbx-9vgVnnp2XJCEQeXAcS&_nc_ohc=Lsi4S5HQ2L0Q7kNvgFuOdXB&_nc_oc=Adifn3oaz5HuZ0HHdv5vRbDugiCX5tAmp2PZ7q1wdhgnBkmz4-4FHIMhRdcBBlxi-XBb930_WVcriwyKvJs84E45&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFuPLnkFMGSHuqEMcjWigJ0kkoDqqTLeW8AaYEwO6cCMg&oe=666AF945' }}
      style={styles.picture}
    />
  
  </View>
  
  <View style={styles.imageContainer}>
    <Image
      source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/440735175_1136143834097103_6127812294574168193_n.jpg?stp=dst-jpg_s206x206&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGKm0PZcoqS9alBILriToyOAO7dRtOY3hcA7t1G05jeF7-3P8GcWB0mjzmtW6bi7zKVNIWKBubRtjNAh7n5BBd0&_nc_ohc=onOz3EEJZpIQ7kNvgG9M3Ec&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFg7d7-IQiKWw0Pv0u4wlIvPL-W16fKi22xTTqr0O_j3Q&oe=666AEA5F' }}
      style={styles.picture}
    />
    
  </View>
</View>


 


      <View style={[styles.infoBox, { backgroundColor: '#008000' }]}>

        <View style={styles.infoItem}>

          <Text style={styles.infoIcon}>📍</Text>
          <Text style={[styles.infoText, { color: 'white'}]} onPress={handleAddressPress}>
            Global Reciprocal Colleges, Caloocan City, Metro Manila, Philippines
          </Text>

        </View>
    
      </View>

       <View style={styles.infoContact}>
        <View style={styles.infoItem}>
          <Text style={styles.infoIcon}>📞</Text>
          <Text style={styles.infoText}>0956465321</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoIcon}>✉️</Text>
            <Text style={styles.infoText}>diazalexis1415@gmai.com</Text>
        </View>

        <View style={styles.infoItem}>
           <Icon name="facebook" style={styles.infoIcon} />
          
            <Text style={styles.infoText}>ALEXIS DIAZ</Text>
          
        </View>

       

        <View style={styles.infoItem}>
         <Icon name="home" style={styles.infoIcon} />
            <Text style={styles.infoText}>VALENZUELA CITY</Text>
        </View>
      </View>

     

      {/* Contact Form */}
      <View style={styles.contactForm}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Your Message"
          value={message}
          onChangeText={setMessage}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#668D2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: '10%',
    marginTop: -50,
    borderWidth: 3,
    borderColor: '##00ff22',
  },
  nameText: {
    fontSize: 25,
    marginVertical: 1,
    color: 'yellow',
  },
  bioText: {
    fontSize: 15,
    marginVertical: 10,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  
  },
  hobbies: {
    backgroundColor: '#204c39',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    justifyContent: 'center',
    flexDirection:'row',
    flexWrap: 'wrap'
  
  },
  sectionTitle: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center'

  },
   picture: {
    width: 100,
    height: 100,
    borderRadius: '10%',
    margin: 5,
    borderWidth: 3,
    borderColor:'red'
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },

  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    color: 'white'
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#00ffff',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  imageContainer:{
    alignItems:'center',
    justifyContent:'start',
  },
  infoBox:{
    margin: 10,
    borderRadius:100,
    
  },
  infoContact: {
    backgroundColor:'green',
      flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 10,
    borderRadius:10
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    flexGrow:1,
  },

infoIcon: {
    fontSize: 18,
    marginRight: 10,
    color: 'blue',
  },
  infoText: {
    fontSize: 12,
    color: 'black',
  },

});