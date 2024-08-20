/* eslint-disable no-unused-vars */
import React from 'react';
import { Stack, Box, Button, FormLabel, Radio, 
  RadioGroup, Typography, FormControl, 
  FormControlLabel, TextField, MenuItem, InputAdornment, Checkbox} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import { useState } from 'react';

import './Latihan.css';

const Latihan = () => {
  const [nama, setNama] = useState('');
  const [isError, setIsError] = useState(false);

  const [email, setEmail] = useState('');
  const [noEmail, setNoEmail] = useState(false);

  const [school, setSchool] = useState('');

  const [nomortelpon, setNomorTelpon] = useState('');

  const [error, setError] = useState('');

  const [provinsi, setProvinsi] = useState('');
  const [kota, setKota] = useState('');

  const [gender, setGender] = useState('');

  const [usia, setUsia] = useState('');

  const handleNamaChange = (event) => {
    const value_namalengkap = event.target.value;
    const hasLowerCase = /[a-z]/.test(value_namalengkap);
    setNama(value_namalengkap);
    setIsError(hasLowerCase);
  }

  const handleEmailChange = (event) => {
    const value_Email = event.target.value;
    const hasNoEmail = !/[@]/.test(value_Email);
  
    setEmail(value_Email);
    setNoEmail(hasNoEmail);
  }

  const handleSchoolChange = (event) => {
    const value_school = event.target.value;
    setSchool(value_school);
  }

  const handleNomorTelpon = (event) => {
    const value_nomor_telepon = event.target.value;
    setNomorTelpon(value_nomor_telepon);
  }

  const handleProvinsiChange = (event) => {
    const value_provinsi = event.target.value;
    setProvinsi(value_provinsi);
  }

  const handleKotaChange = (event) => {
    const value_kota = event.target.value;
    setKota(value_kota);
  }

  const handleGenderChange = (event) => {
    const value_gender = event.target.value;
    setGender(value_gender);

  }

  const handleChangeUsia = (event) => {
    const value_usia = event.target.checked;
    setUsia(value_usia);
  }

  const handleClick = () => {
    if (nama && email && school && nomortelpon && provinsi && kota && nama === nama.toUpperCase() && !noEmail && gender
    && nomortelpon.length >= 10 && usia) {
      console.log({nama, email, school, nomortelpon, provinsi, kota, gender, usia});
    } else {
      if (!nama) {
        console.log("error, nama anda masih kosong");
        setError('Nama anda masih kosong!');
      } else if (!email) {
        console.log("error, email belum kosong");
        setError('Email anda masih kosong!');
      } else if (!school) {
        console.log("error, nama sekolah masih kosong");
        setError('Nama sekolah anda masih kosong!');
      } else if (!nomortelpon) {
        console.log("error, nomor telepon belum diisi");
        setError('Nomor anda masih kosong!');
      } else if (noEmail) {
        console.log("error, email anda tidak ada \"@\"");
        setError("Error, email anda tidak ada \"@\"");
      } else if (nama !== nama.toUpperCase()) {
        console.log("Nama anda tidak huruf besar");
        setError("Nama anda tidak menggunakan huruf besar");
      } else if (!provinsi) {
        console.log("Anda belum mengisi kolom pilih provinsi");
        setError("Anda belum memasukkan pilihan provinsi");
      } else if (!kota) {
        console.log("Anda belum mengisi kolom pilih kota");
        setError("Anda belum memasukkan pilihan kota");
      } else if (!gender) {
        console.log('Anda belum memilih gender');
        setError('Anda belum memilih gender');
      } else if (nomortelpon.length < 10) {
        console.log("Nomor anda kurang dari 10 digit");
        setError("periksa nomor anda, nomor anda masih di bawah 10 digit");
      } 
    }
  }

  const provinsiList = ['Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Banten'];
  const kotaList = ['indramayu', 'jakarta', 'bandung', 'semarang', 'yogyakarta', 'cirebon', 'magetan'];

  return (
    <Stack className='data-diri-container' direction='column'>
      <Typography variant='h4'>Data Diri</Typography>
      <Stack spacing={4} direction='row' name='input' className='data-diri-input'>
        <FormControl fullWidth>
          <FormLabel htmlFor='nama-lengkap'>Nama Lengkap Anda</FormLabel>
          <TextField 
            id='nama-lengkap'
            name='nama-lengkap'
            label='nama lengkap anda'
            variant='outlined' 
            fullWidth 
            helperText={isError ? "harus menggunakan huruf besar" : "tolong menggunakan huruf besar!"} 
            onChange={handleNamaChange} 
            value={nama} 
            required 
            error={isError}
            InputProps={{endAdornment: <InputAdornment position='end'><PersonIcon/></InputAdornment>}}
            autoComplete='name'  
          />
        </FormControl>

        <FormControl fullWidth>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <TextField 
            id='email'
            name='email'
            label='email' 
            variant='outlined' 
            onChange={handleEmailChange} 
            fullWidth 
            required 
            value={email}
            helperText={noEmail ? "harus menggunakan @" : ""} 
            error={noEmail} 
            InputProps={{endAdornment: <InputAdornment position='end'><EmailIcon/></InputAdornment>}}
            autoComplete='email'  
          />
        </FormControl>
      </Stack>

      <Stack spacing={4} direction='row' className='data-diri-input'>
        <FormControl fullWidth>
          <FormLabel htmlFor='asal-sekolah'>Asal Sekolah</FormLabel>
          <TextField 
            id='asal-sekolah'
            name='asal-sekolah'
            label='asal sekolah' 
            fullWidth 
            onChange={handleSchoolChange} 
            value={school}
            InputProps={{endAdornment: <InputAdornment position='end'><SchoolIcon/></InputAdornment>}}
            autoComplete='school'  
          />
        </FormControl>

        <FormControl fullWidth>
          <FormLabel htmlFor='nomor-telepon'>Nomor Telepon</FormLabel>
          <TextField 
            id='nomor-telepon'
            name='nomor-telepon'
            label='nomor telepon' 
            type='number'
            fullWidth 
            onChange={handleNomorTelpon} 
            value={nomortelpon}
            InputProps={{startAdornment: <InputAdornment position='start'>+62</InputAdornment>}}
            autoComplete='tel'  
          />
        </FormControl>
      </Stack>

      <Stack className='provinsi-container-select' direction='row'>
        <Box width='334px'>
          <FormControl fullWidth>
            
            <TextField               
              name='pilih-provinsi'
              label='pilih provinsi' 
              select 
              value={provinsi} 
              fullWidth 
              className='pilih-provinsi' 
              onChange={handleProvinsiChange}
              autoComplete='address-level1'  
            >
              {provinsiList.map((provinsi) => (
                <MenuItem key={provinsi} value={provinsi}>
                  {provinsi}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Box>

        <Box width='334px'>
          <FormControl fullWidth>
          
            <TextField 
              name='pilih-kota'
              label='pilih kota' 
              select 
              value={kota} 
              fullWidth 
              className='pilih-kota' 
              onChange={handleKotaChange}
              autoComplete='address-level2'  
            >
              {kotaList.map((kota) => (
                <MenuItem key={kota} value={kota}>
                  {kota}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Box>
      </Stack>

      <Stack spacing={2} className='gender-radiobutton'>
        <FormControl>
          
          <RadioGroup value={gender} onChange={handleGenderChange}>
            <FormControlLabel 
              control={<Radio size='small' color='primary'/>} 
              label='Male' 
              value='Male'
            />
            <FormControlLabel 
              control={<Radio size='small' color='secondary'/>} 
              label='Female' 
              value='Female'
            />
          </RadioGroup>
        </FormControl>
      </Stack>

      <Stack spacing={2} direction='row' className='checkbox-usia'>
        <Box>
          <FormControlLabel label='anda berusia 18++ tahun' control={<Checkbox checked={usia} onChange={handleChangeUsia}/>}/>
             
        </Box>

      </Stack>

      <Stack>
        <Button variant='contained' size='small' onClick={handleClick}>ACCEPT</Button>
      </Stack>

      <Stack>
        <Typography variant='subtitle' color='error'>{error}</Typography>
      </Stack>
    </Stack>
  );
}

export default Latihan;
